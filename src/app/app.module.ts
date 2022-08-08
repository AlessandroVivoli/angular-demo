import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccommodationDetailsComponent } from './modules/components/accommodations/accommodation-details/accomodation-details.component';
import { AccommodationComponent } from './modules/components/accommodations/accommodation.component';
import { MyPlacesComponent } from './modules/components/favorites/my-places.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FormControlInputComponent } from './modules/components/form-control-input/form-control-input.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { LocationComponent } from './modules/components/locations/location/location.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { HomeComponent } from './modules/components/home/home.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';
import { RecommendationsComponent } from './modules/components/recommendations/recommendations.component';
import { SharedModule } from './modules/components/shared/shared.module';
import { AccommodationBookingComponent } from './modules/components/accommodations/accommodation-booking/accommodation-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPlacesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LocationsComponent,
    RecommendationsComponent,
    LoginComponent,
    FormControlInputComponent,
    AccommodationComponent,
    AccommodationDetailsComponent,
    LocationComponent,
    MyBookingComponent,
    AccommodationBookingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
