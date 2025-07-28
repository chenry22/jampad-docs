import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-admin-account-page',
  imports: [ChangePageComponent],
  templateUrl: './admin-account-page.component.html',
  styleUrl: './admin-account-page.component.css'
})
export class AdminAccountPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}