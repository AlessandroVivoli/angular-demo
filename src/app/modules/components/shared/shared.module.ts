import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccommodationBoxComponent } from './components/accommodation-box/accommodation-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';

@NgModule({
  declarations: [
    LocationBoxComponent,
    AccommodationBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationBoxComponent,
    AccommodationBoxComponent
  ]
})
export class SharedModule { }