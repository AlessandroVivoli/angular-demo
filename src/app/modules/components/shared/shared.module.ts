import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccommodationBoxComponent } from './components/accommodation-box/accommodation-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';
import { FavouriteDirective } from './directives/favourite.directive';

@NgModule({
  declarations: [
    LocationBoxComponent,
    AccommodationBoxComponent,
    FavouriteDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationBoxComponent,
    AccommodationBoxComponent,
    FavouriteDirective
  ]
})
export class SharedModule { }