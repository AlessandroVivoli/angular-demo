import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LocationsComponent } from './locations/locations.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    RecommendationsComponent,
    FavoritesComponent,
    LocationsComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class MainModule { }
