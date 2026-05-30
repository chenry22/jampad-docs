import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';
import { map } from 'rxjs';

@Component({
  selector: 'app-cosmetic-gallery-page',
  imports: [],
  templateUrl: './cosmetic-gallery-page.component.html',
  styleUrl: './cosmetic-gallery-page.component.css'
})
export class CosmeticGalleryPageComponent implements OnInit {
  sort = 'rarity';
  descending = true;
  artists  = new Set<string>();
  filteredTypes = new Set<number>();
  filteredArtists = new Set<string>();
  sortedGallery: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();

    this.getSortedGallery();
  }

  filterArtist(a: string) {
    if (this.filteredArtists.has(a)) {
      this.filteredArtists.delete(a);
    } else {
      this.filteredArtists.add(a);
    }
    this.getSortedGallery();
  }

  filterType(t: number) {
    if (this.filteredTypes.has(t)) {
      this.filteredTypes.delete(t);
    } else {
      this.filteredTypes.add(t);
    }
    this.getSortedGallery();
  }

  changeSort(sort: string) {
    if (sort === this.sort) {
      this.descending = !this.descending;
    } else {
      this.descending = true;
    }
    this.sort = sort;
    this.getSortedGallery();
  }

  getSortedGallery() {
    this.http.get('item_rows.csv', { responseType: 'text' })
      .pipe(
        map(csv => {
          const result = Papa.parse(csv, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
          });
          return result.data;
        })
      )
      .subscribe(data => {
        let gallery: any[] = [...data];
        gallery.forEach(item => {
          this.artists.add(item.artist)
        });

        gallery.sort((a, b) => {
          switch(this.sort) {
            case 'rarity':
              return (this.descending ? 1 : -1) * (b.rarity - a.rarity);
            case 'type':
              return (this.descending ? 1 : -1) * (b.item_type - a.item_type);
            case 'artist':
              return (this.descending ? 1 : -1) * (b.artist.localeCompare(a.artist));
            default:
              return 1;
          }
        });

        if (this.filteredArtists.size > 0 || this.filteredTypes.size > 0) {
          let allArtists = this.filteredArtists.size === 0;
          let allTypes = this.filteredTypes.size === 0;
          this.sortedGallery = gallery.filter(i => {
            return (allArtists || this.filteredArtists.has(i.artist))
              && (allTypes || this.filteredTypes.has(i.item_type))
          });
        } else {
          this.sortedGallery = gallery;
        }
      });
  }
}