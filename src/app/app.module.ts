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
import { ShoppingComponent } from './shopping/shopping.component';
import { MensComponent } from './shopping/mens/mens.component';
import { WomensComponent } from './shopping/womens/womens.component';
import { KidsComponent } from './shopping/kids/kids.component';
import { AboutFormComponent } from './about/about-form/about-form.component';
import { AboutTableComponent } from './about/about-table/about-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UniversityComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    VehicleComponent,
    ShoppingComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    AboutFormComponent,
    AboutTableComponent,
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

