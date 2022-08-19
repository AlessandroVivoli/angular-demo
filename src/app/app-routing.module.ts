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
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
	{ path: 'location/:id', component: AccomodationsComponent, canActivate: [AuthGuard] },
	{ path: 'recommendations', component: AccomodationsComponent, canActivate: [AuthGuard] },
	{ path: 'accomodation/:id', component: AccomodationDetailsComponent, canActivate: [AuthGuard] },
	{ path: 'accomodation/:id/book', component: AccomodationBookingComponent, canActivate: [AuthGuard] },
	{ path: 'my-places', component: MyPlacesComponent, canActivate: [AuthGuard] },
	{ path: 'my-bookings', component: MyBookingComponent, canActivate: [AuthGuard] },
	{ path: 'add-new', component: MyAccomodationFormComponent, canActivate: [AuthGuard] },
	{ path: 'edit/:id', component: MyAccomodationFormComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
