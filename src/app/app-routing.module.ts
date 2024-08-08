import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MensComponent } from './shopping/mens/mens.component';
import { WomensComponent } from './shopping/womens/womens.component';
import { KidsComponent } from './shopping/kids/kids.component';
import { InfoComponent } from './info/info.component';
import { OverviewComponent } from './info/overview/overview.component';
import { DetailsComponent } from './info/details/details.component';
// import { GamesModule } from './games/games.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'student', component: StudentComponent},
  {path: 'university', component: UniversityComponent},
  {path : 'about' , component :AboutComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule)},
  {path : 'vehicle', component :VehicleComponent},
  {path: 'shopping', component : ShoppingComponent, children: [
    {path: '', redirectTo: 'mens', pathMatch: 'full'},
    {path: 'mens', component: MensComponent},
    {path: 'womens', component: WomensComponent},
    {path: 'kids', component: KidsComponent} 
  ]},
  {path: 'info' , component : InfoComponent, children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: OverviewComponent},
    {path: 'details', component: DetailsComponent},
  ]},
  

  {path : 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
