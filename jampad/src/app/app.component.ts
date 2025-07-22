import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { SidebarGroupComponent } from './sidebar-group/sidebar-group.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarGroupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jampad';
  isSidebarOpen = false;
}