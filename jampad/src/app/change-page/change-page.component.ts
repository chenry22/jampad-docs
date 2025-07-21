import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-change-page',
  imports: [CommonModule, MatIcon, RouterModule],
  templateUrl: './change-page.component.html',
  styleUrl: './change-page.component.css'
})
export class ChangePageComponent {
  prev = input("")
  next = input("")

  nextLink(): string {
    return "/" + this.next().toLowerCase().replace(" ", "_");
  }
  prevLink(): string {
    return "/" + this.prev().toLowerCase().replace(" ", "_");
  }
}
