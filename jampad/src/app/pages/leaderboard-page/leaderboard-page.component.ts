import { Component, OnInit } from '@angular/core';
import { ChangePageComponent } from '../../change-page/change-page.component';

@Component({
  selector: 'app-leaderboard-page',
  imports: [ChangePageComponent],
  templateUrl: './leaderboard-page.component.html',
  styleUrl: './leaderboard-page.component.css'
})
export class LeaderboardPageComponent implements OnInit {
  ngOnInit() {
    let el = document.getElementById('title');
    el?.scrollIntoView();
  }
}
