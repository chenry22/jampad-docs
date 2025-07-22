import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-event-creator-page',
  imports: [RouterModule, ChangePageComponent],
  templateUrl: './event-creator-page.component.html',
  styleUrl: './event-creator-page.component.css'
})
export class EventCreatorPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
