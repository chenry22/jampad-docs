import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-feed-page',
  imports: [ChangePageComponent, RouterModule],
  templateUrl: './event-feed-page.component.html',
  styleUrl: './event-feed-page.component.css'
})
export class EventFeedPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
