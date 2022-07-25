import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentBoxComponent } from './components/apartment-box/apartment-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';

@NgModule({
  declarations: [
    LocationBoxComponent,
    ApartmentBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocationBoxComponent,
    ApartmentBoxComponent
  ]
})
export class SharedModule { }