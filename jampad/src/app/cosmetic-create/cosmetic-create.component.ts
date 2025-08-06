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

export class CosmeticCreateComponent  {
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
}
