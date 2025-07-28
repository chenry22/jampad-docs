import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-page',
  imports: [ChangePageComponent, RouterModule],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.css'
})
export class EventPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
