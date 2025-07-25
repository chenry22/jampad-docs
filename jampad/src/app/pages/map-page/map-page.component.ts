import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-map-page',
  imports: [RouterModule, ChangePageComponent],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})
export class MapPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
