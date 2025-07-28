import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WipPageComponent } from './pages/wip-page/wip-page.component';
import { EventFeedPageComponent } from './pages/event-feed-page/event-feed-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { EventCreatorPageComponent } from './pages/event-creator-page/event-creator-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { RsvpPageComponent } from './pages/rsvp-page/rsvp-page.component';
import { CheckInPageComponent } from './pages/check-in-page/check-in-page.component';
import { FrogPageComponent } from './pages/frog-page/frog-page.component';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { ArtistAccountPageComponent } from './pages/artist-account-page/artist-account-page.component';
import { VenueAccountPageComponent } from './pages/venue-account-page/venue-account-page.component';
import { AdminAccountPageComponent } from './pages/admin-account-page/admin-account-page.component';
import { CosmeticCreateComponent } from './cosmetic-create/cosmetic-create.component';
import { DownloadPageComponent } from './pages/download-page/download-page.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'download', component: DownloadPageComponent },
    { path: 'create_cosmetic', component: CosmeticCreateComponent},
    { path: 'reset_password', component: ResetPasswordComponent },

    { path: 'event_feed', component: EventFeedPageComponent },
    { path: 'search', component: SearchPageComponent },
    { path: 'map', component: MapPageComponent },
    { path: 'event_creator', component: EventCreatorPageComponent },
    { path: 'profile', component: ProfilePageComponent },

    { path: 'events', component: EventPageComponent },
    { path: 'rsvps', component: RsvpPageComponent },
    { path: 'check_ins', component: CheckInPageComponent },

    { path: 'frogs', component: FrogPageComponent },
    { path: 'leaderboards', component: LeaderboardPageComponent },
    { path: 'artist_accounts', component: ArtistAccountPageComponent },
    { path: 'venue_accounts', component: VenueAccountPageComponent },
    { path: 'admin_accounts', component: AdminAccountPageComponent },

    { path: 'changelog', component: WipPageComponent },
    { path: 'terms_of_use', component: WipPageComponent },
    { path: 'privacy_policy', component: WipPageComponent },
    { 
        path: '**', 
        redirectTo: '' 
    }
];
