import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccommodationBookingComponent } from './modules/components/accommodations/accommodation-booking/accommodation-booking.component';
import { AccommodationDetailsComponent } from './modules/components/accommodations/accommodation-details/accomodation-details.component';
import { AccommodationComponent } from './modules/components/accommodations/accommodation.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FormControlInputComponent } from './modules/components/form-control-input/form-control-input.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MyAccommodationFormComponent } from './modules/components/my-accommodation-form/my-accommodation-form.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';
import { MyPlacesComponent } from './modules/components/my-places/my-places.component';
import { SharedModule } from './modules/components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccommodationComponent,
    AccommodationDetailsComponent,
    AccommodationBookingComponent,
    MyAccommodationFormComponent,
    LocationsComponent,
    MyPlacesComponent,
    MyBookingComponent,
    FormControlInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
