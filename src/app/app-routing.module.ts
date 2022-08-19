import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccomodationBookingComponent } from './modules/components/accomodations/accomodation-booking/accommodation-booking.component';
import { AccomodationDetailsComponent } from './modules/components/accomodations/accomodation-details/accomodation-details.component';
import { AccomodationsComponent } from './modules/components/accomodations/accomodations.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MyAccomodationFormComponent } from './modules/components/my-accomodation-form/my-accomodation-form.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';
import { MyPlacesComponent } from './modules/components/my-places/my-places.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'location/:id', component: AccomodationsComponent },
  { path: 'recommendations', component: AccomodationsComponent },
  { path: 'accomodation/:id', component: AccomodationDetailsComponent },
  { path: 'accomodation/:id/book', component: AccomodationBookingComponent },
  { path: 'my-places', component: MyPlacesComponent },
  { path: 'my-bookings', component: MyBookingComponent },
  { path: 'add-new', component: MyAccomodationFormComponent },
  { path: 'edit/:id', component: MyAccomodationFormComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }