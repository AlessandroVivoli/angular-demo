import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './modules/components/favorites/favorites.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MainComponent } from './modules/components/main/main.component';
import { RecommendationsComponent } from './modules/components/recommendations/recommendations.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
