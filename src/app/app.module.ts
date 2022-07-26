import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentDetailsComponent } from './modules/components/apartment-details/apartment-details.component';
import { FavoritesComponent } from './modules/components/favorites/favorites.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { LocationsComponent } from './modules/components/locations/locations.component';
import { LoginComponent } from './modules/components/login/login.component';
import { MainComponent } from './modules/components/main/main.component';
import { RecommendationsComponent } from './modules/components/recommendations/recommendations.component';
import { SharedModule } from './modules/components/shared/shared.module';
import { FormControlInputComponent } from './modules/components/form-control-input/form-control-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentDetailsComponent,
    FavoritesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LocationsComponent,
    RecommendationsComponent,
    LoginComponent,
    FormControlInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
