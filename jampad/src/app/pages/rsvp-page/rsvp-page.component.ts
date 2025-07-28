import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-rsvp-page',
  imports: [ChangePageComponent],
  templateUrl: './rsvp-page.component.html',
  styleUrl: './rsvp-page.component.css'
})
export class RsvpPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
