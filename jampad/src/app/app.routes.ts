import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WipPageComponent } from './pages/wip-page/wip-page.component';
import { EventFeedPageComponent } from './pages/event-feed-page/event-feed-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { EventCreatorPageComponent } from './pages/event-creator-page/event-creator-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'reset_password', component: ResetPasswordComponent },

    { path: 'event_feed', component: EventFeedPageComponent },
    { path: 'search', component: SearchPageComponent },
    { path: 'map', component: MapPageComponent },
    { path: 'event_creator', component: EventCreatorPageComponent },
    { path: 'profile', component: ProfilePageComponent },

    { path: 'events', component: WipPageComponent },
    { path: 'rsvps', component: WipPageComponent },
    { path: 'saves', component: WipPageComponent },
    { path: 'check_ins', component: WipPageComponent },
    { path: 'ratings', component: WipPageComponent },

    { path: 'artist_accounts', component: WipPageComponent },
    { path: 'venue_accounts', component: WipPageComponent },
    { path: 'frogs', component: WipPageComponent },
    { path: 'frog_coin', component: WipPageComponent },
    { path: 'leaderboards', component: WipPageComponent },

    { path: 'changelog', component: WipPageComponent },
    { path: 'terms_of_use', component: WipPageComponent },
    { path: 'privacy_policy', component: WipPageComponent },
    { 
        path: '**', 
        redirectTo: '' 
    }
];
