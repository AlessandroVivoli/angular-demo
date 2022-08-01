import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentBoxComponent } from './components/apartment-box/apartment-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';
import { RouterModule } from '@angular/router';
import { FavouriteDirective } from './directives/favourite.directive';

@NgModule({
  declarations: [
    LocationBoxComponent,
    ApartmentBoxComponent,
    FavouriteDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationBoxComponent,
    ApartmentBoxComponent,
    FavouriteDirective
  ]
})
export class SharedModule { }