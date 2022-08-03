import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccommodationDetailsComponent } from './modules/components/accommodations/accommodation-details/accomodation-details.component';
import { AccommodationComponent } from './modules/components/accommodations/accommodation.component';
import { FavoritesComponent } from './modules/components/favorites/favorites.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FormControlInputComponent } from './modules/components/form-control-input/form-control-input.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { LocationComponent } from './modules/components/locations/location/location.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MainComponent } from './modules/components/main/main.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';
import { MyPlacesComponent } from './modules/components/my-places/my-places.component';
import { RecommendationsComponent } from './modules/components/recommendations/recommendations.component';
import { SharedModule } from './modules/components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LocationsComponent,
    RecommendationsComponent,
    LoginComponent,
    FormControlInputComponent,
    AccommodationComponent,
    AccommodationDetailsComponent,
    LocationComponent,
    MyPlacesComponent,
    MyBookingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
