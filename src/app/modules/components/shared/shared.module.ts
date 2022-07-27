import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentBoxComponent } from './components/apartment-box/apartment-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LocationBoxComponent,
    ApartmentBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationBoxComponent,
    ApartmentBoxComponent
  ]
})
export class SharedModule { }