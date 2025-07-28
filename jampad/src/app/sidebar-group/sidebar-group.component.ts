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
        { name: "Check Ins", icon: "check_circle", link: "/check_ins" }
      ]
    },
    { title : "COMMUNITY",
      categories: [
        { name: "Frogs", icon: "spa", link: "/frogs" },
        { name: "Leaderboards", icon: "leaderboard", link: "/leaderboards" },
        { name: "Artist Accounts", icon: "music_note", link: "/artist_accounts" },
        { name: "Venue Accounts", icon: "door_front", link: "/venue_accounts" },
        { name: "Admin Accounts", icon: "shield", link: "/admin_accounts"},
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
