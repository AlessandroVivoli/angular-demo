import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccommodationBookingComponent } from './modules/components/accommodations/accommodation-booking/accommodation-booking.component';
import { AccommodationDetailsComponent } from './modules/components/accommodations/accommodation-details/accomodation-details.component';
import { AccommodationComponent } from './modules/components/accommodations/accommodation.component';
import { FavoritesComponent } from './modules/components/favorites/favorites.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { HomeComponent } from './modules/components/home/home.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'accommodations', component: AccommodationComponent },
  { path: 'accommodations/:id', component: AccommodationDetailsComponent },
  { path: 'accommodations/:id/book', component: AccommodationBookingComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'bookings', component: MyBookingComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
