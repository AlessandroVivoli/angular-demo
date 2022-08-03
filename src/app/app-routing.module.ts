import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationDetailsComponent } from './modules/components/accommodations/accommodation-details/accomodation-details.component';
import { AccommodationComponent } from './modules/components/accommodations/accommodation.component';
import { FavoritesComponent } from './modules/components/favorites/favorites.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MainComponent } from './modules/components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'accommodations', component: AccommodationComponent },
  { path: 'accommodations/:id', component: AccommodationDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
