import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-venue-account-page',
  imports: [ChangePageComponent],
  templateUrl: './venue-account-page.component.html',
  styleUrl: './venue-account-page.component.css'
})
export class VenueAccountPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}