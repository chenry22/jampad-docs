import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-check-in-page',
  imports: [ChangePageComponent],
  templateUrl: './check-in-page.component.html',
  styleUrl: './check-in-page.component.css'
})
export class CheckInPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}