import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { NgxImageCompressService } from 'ngx-image-compress';
import p5 from 'p5';

@Component({
  selector: 'app-cosmetic-create',
  imports: [MatIcon, FormsModule],
  templateUrl: './cosmetic-create.component.html',
  styleUrl: './cosmetic-create.component.css'
})

export class CosmeticCreateComponent implements AfterViewInit  {
  canvas: p5 | null = null;
  canvasObj: p5.Renderer | null = null;
  sw = 4;
  color: any;
  previousState: p5.Image[] = [];
  lastX = 0;
  lastY = 0;

  // file upload
  MAX_IMG_SIZE = 500000; // target 500kb
  file : File | null = null;
  url: string = '';

  cosmeticType = "hat";
  artistContact = "";
  cosmeticName = "";
  alertTxt = "";

  // supabase
  private sb: SupabaseClient
  constructor(private imgCompress: NgxImageCompressService) {
    this.sb = createClient('https://hhoavnmqrezwbnwzfmjo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhob2F2bm1xcmV6d2Jud3pmbWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjg4OTUsImV4cCI6MjA2Mjg0NDg5NX0.IJ6t9v4Xe4fYoReXd_R2UPNYjF_VZo4ePbhi8GJNi9g')
  }

  handleFileInput(e: Event) {
    const target= e.target as HTMLInputElement;
    const f = (target.files as FileList)[0];
    if(f.type != "image/png") {
      this.alertTxt = "Please only submit PNGs"
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(f); 
    reader.onload = async (e: any) => { 
      const img = e.target.result;
      const size = this.imgCompress.byteCount(img);
      if(size > this.MAX_IMG_SIZE) {
        const maxLength = Math.sqrt(this.MAX_IMG_SIZE);
        const ratio = (maxLength / Math.sqrt(size)) * 100;
        console.log("Before: " + size + ", ratio: " + ratio)
        this.imgCompress.compressFile(img, -1, ratio, 50, maxLength, maxLength).then((compressed) => {
          this.url = compressed;
          console.log('Compressed:', this.imgCompress.byteCount(compressed));
        });
      } else {
        this.url = img;
      }
      this.file = f;
    }
  }

  async submitCosmetic() {
    if(this.file == null) {
      this.alertTxt = "Please upload a valid image";
      return;
    } if(this.cosmeticName.length == 0) {
      this.alertTxt = "Please enter a cosmetic name";
      return;
    } else if (this.artistContact.length == 0) {
      this.alertTxt = "Please fill out the artist contact";
      return;
    }

    let uuid = crypto.randomUUID();
    const { error: storageErr } = await this.sb.storage.from("cosmetics").upload(uuid + '.png', this.file);
    if(storageErr) {
      console.error(storageErr);
      this.alertTxt = "Failed to upload image. "  + storageErr.message + ".  If this error persists please contact our support team.";
      return;
    }
    const { data } = await this.sb.storage.from("cosmetics").getPublicUrl(uuid + '.png');
    console.log(data.publicUrl);

    const { error } = await this.sb.from('cosmetic_submission').insert({
      'id' : uuid, 'type': this.cosmeticType, 'name' : this.cosmeticName, 'contact' : this.artistContact, 'url' : data.publicUrl
    })
    if(error) {
      console.error(error);
      this.alertTxt = "Failed to upload submission. "  + error.message + ". If this error persists, please contact our support team.";
    } else {
      this.alertTxt = '';
      this.cosmeticName = '';
      this.artistContact = '';
      this.url = '';
      alert("Success! If your cosmetic is accepted we will contact you.");
    }
  }

  ngAfterViewInit() {
    const sketch = (s: p5) => {
      s.setup = () => {
        const size = s.windowWidth - (s.windowWidth >= 768 ? 600 : 100);
        this.canvasObj = s.createCanvas(size, size);
        this.canvasObj.parent('sketch-holder');

        s.background(255);
        s.loadImage('frog_template.png', (img) => {
          s.tint(255, 100);
          s.image(img, 0, 0, s.width, s.height);
          s.tint(255, 255);
          this.previousState.push(s.get()); // save og state
        });
        s.strokeWeight(this.sw);
        s.rect(0, 0, s.width, s.height);
      };

      s.draw = () => {
        if(s.mouseIsPressed) {
          s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
        }
      };
      s.mouseReleased = (event: MouseEvent) => {
        let rect = this.canvasObj?.elt.getBoundingClientRect();
        let x = event.clientX;
        let y = event.clientY;

        if(x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          console.log("cached");
          this.previousState.push(s.get());
          this.lastX = s.mouseX;
          this.lastY = s.mouseY;
          }
      };
    };
    this.canvas = new p5(sketch);
  }
  clearCanvas() {
    let og = this.previousState[0];
    this.previousState = [og];
    this.canvas?.background('white');
    this.canvas?.image(og, 0, 0, this.canvas?.width, this.canvas?.height);
  }
  undoCanvas() {
    if (this.previousState.length < 2) { return; } // save OG state
    this.previousState.pop();
    let prev = this.previousState[this.previousState.length - 1];
    if(prev) {
      this.canvas?.image(this.previousState[0], 0, 0, this.canvas?.width, this.canvas?.height);
      this.canvas?.image(prev, 0, 0, this.canvas?.width, this.canvas?.height);
    }
  }

  ngOnDestroy(): void {
    if (this.canvas) {
      this.canvas?.remove(); // Removes canvas and cleans up when view disappears
    }
  }
}
