import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UniversityComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    VehicleComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

