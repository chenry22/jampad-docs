import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-group',
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './sidebar-group.component.html',
  styleUrl: './sidebar-group.component.css'
})
export class SidebarGroupComponent {
  private router = inject(Router);
  goToPage(page: string): void {
    const route = page.toLowerCase().replace(" ", "_");
    this.router.navigate([route]);
  }

  // group header -> list of group titles and icons
  groups = [
    { 
      title : "MAIN VIEWS",
      categories: [
        { name: "Event Feed", icon: "home", link: "/event_feed" },
        { name: "Search", icon: "search", link: "/search" },
        { name: "Map", icon: "map", link: "/map" },
        { name: "Event Creator", icon: "add_box", link: "/event_creator" },
        { name: "Profile", icon: "person", link: "/profile" }
      ]
    },
    { title : "EVENTS",
      categories: [
        { name: "Events", icon: "receipt", link: "/events" },
        { name: "RSVPs", icon: "rsvp", link: "/rsvps" },
        { name: "Saves", icon: "bookmark", link: "/saves" },
        { name: "Check Ins", icon: "check_circle", link: "/check_ins" },
        { name: "Comments", icon: "comment", link: "/comments" },
        { name: "Ratings", icon: "star", link: "/ratings" }
      ]
    },
    { title : "COMMUNITY",
      categories: [
        { name: "Referrals", icon: "people_alt", link: "/referrals" },
        { name: "Frogs", icon: "spa", link: "/frogs" },
        { name: "Frog Coin", icon: "circle", link: "/frog_coin" },
        { name: "Leaderboards", icon: "leaderboard", link: "/leaderboards" }
      ]
    },
    { title : "INFO",
      categories: [
        { name: "Changelog", icon: "fiber_new", link: "/changelog" },
        { name: "Terms of Use", icon: "info", link: "/terms_of_use" },
        { name: "Privacy Policy", icon: "policy", link: "/privacy_policy" }
      ]
    }
  ];
}
