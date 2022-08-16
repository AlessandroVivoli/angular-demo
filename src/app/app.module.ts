import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomodationBookingComponent } from './modules/components/accomodations/accomodation-booking/accommodation-booking.component';
import { AccomodationDetailsComponent } from './modules/components/accomodations/accomodation-details/accomodation-details.component';
import { AccomodationsComponent } from './modules/components/accomodations/accomodations.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FormControlInputComponent } from './modules/components/form-control-input/form-control-input.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MyAccomodationFormComponent } from './modules/components/my-accomodation-form/my-accomodation-form.component';
import { MyBookingComponent } from './modules/components/my-booking/my-booking.component';
import { MyPlacesComponent } from './modules/components/my-places/my-places.component';
import { SharedModule } from './modules/components/shared/shared.module';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { StayVacationService } from './services/stay-vacation.service';
import { AccomodationEffects } from './state/accomodations/accomodation.effects';
import { accomodationReducer } from './state/accomodations/accomodation.reducer';
import { LocationEffects } from './state/location/location.effects';
import { locationReducer } from './state/location/location.reducer';
import { LocationsEffects } from './state/locations/locations.effects';
import { locationsReducer } from './state/locations/locations.reducer';
import { ReservationEffects } from './state/reservations/reservation.effects';
import { deleteReservationReducer, putReservationReducer, reservationReducer } from './state/reservations/reservation.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccomodationsComponent,
    AccomodationBookingComponent,
    AccomodationDetailsComponent,
    MyAccomodationFormComponent,
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
    SharedModule,
    HttpClientModule,
    EffectsModule.forRoot([
      AccomodationEffects,
      LocationsEffects,
      LocationEffects,
      ReservationEffects
    ]),
    StoreModule.forRoot({
      accomodations: accomodationReducer,
      locations: locationsReducer,
      location: locationReducer,
      reservations: reservationReducer,
      deleteReservation: deleteReservationReducer,
      putReservation: putReservationReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    StayVacationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
