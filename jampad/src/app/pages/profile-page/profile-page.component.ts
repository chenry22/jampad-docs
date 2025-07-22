import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-profile-page',
  imports: [RouterModule, ChangePageComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}