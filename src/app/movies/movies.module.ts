import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { MoviesTableComponent } from './movies-table/movies-table.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesFilterComponent,
    MoviesTableComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
