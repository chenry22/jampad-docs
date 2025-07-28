import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-frog-page',
  imports: [ChangePageComponent],
  templateUrl: './frog-page.component.html',
  styleUrl: './frog-page.component.css'
})
export class FrogPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}