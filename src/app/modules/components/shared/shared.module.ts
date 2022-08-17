import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccomodationBoxComponent } from './components/accomodation-box/accomodation-box.component';
import { LocationBoxComponent } from './components/location-box/location-box.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    LocationBoxComponent,
    AccomodationBoxComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationBoxComponent,
    AccomodationBoxComponent,
    DeletePopupComponent
  ]
})
export class SharedModule { }