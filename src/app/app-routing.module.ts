import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccommodationBookingComponent } from './modules/components/accommodations/accommodation-booking/accommodation-booking.component';
import { AccommodationDetailsComponent } from './modules/components/accommodations/accommodation-details/accomodation-details.component';
import { AccommodationsComponent } from './modules/components/accommodations/accommodations.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MyAccommodationFormComponent } from './modules/components/my-accommodation-form/my-accommodation-form.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';
import { MyPlacesComponent } from './modules/components/my-places/my-places.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: AccommodationsComponent },
  { path: 'recommendations', component: AccommodationsComponent },
  { path: 'accommodation/:id', component: AccommodationDetailsComponent },
  { path: 'accommodation/:id/book', component: AccommodationBookingComponent },
  { path: 'my-places', component: MyPlacesComponent },
  { path: 'my-bookings', component: MyBookingComponent },
  { path: 'add-new', component: MyAccommodationFormComponent },
  { path: 'edit/:id', component: MyAccommodationFormComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }