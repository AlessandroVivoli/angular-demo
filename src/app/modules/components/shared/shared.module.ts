import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccomodationBoxComponent } from './components/accomodation-box/accomodation-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';

@NgModule({
  declarations: [
    LocationBoxComponent,
    AccomodationBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationBoxComponent,
    AccomodationBoxComponent
  ]
})
export class SharedModule { }