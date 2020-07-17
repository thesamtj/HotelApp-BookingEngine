import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { NativeWeddingsComponent } from './weddings/native-weddings/native-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    FoodAndBeverageComponent,
    LifestyleComponent,
    WeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    RoomsComponent,
    RestaurantComponent,
    BarsComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    NativeWeddingsComponent,
    WesternWeddingsComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
