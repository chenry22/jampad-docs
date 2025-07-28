import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-artist-account-page',
  imports: [ChangePageComponent],
  templateUrl: './artist-account-page.component.html',
  styleUrl: './artist-account-page.component.css'
})
export class ArtistAccountPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}