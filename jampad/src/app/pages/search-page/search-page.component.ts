import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-search-page',
  imports: [RouterModule, ChangePageComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
