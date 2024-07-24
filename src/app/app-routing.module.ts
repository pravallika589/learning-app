import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'student', component: StudentComponent},
  {path: 'university', component: UniversityComponent},
  {path : 'about' , component :AboutComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'games', component :GamesComponent},
  {path : 'vehicle', component :VehicleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
