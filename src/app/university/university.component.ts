import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css',
})
export class UniversityComponent {

  universityList: any = [];

  universityService = inject(UniversityService);

  

  getDataFromApi(): void {
    console.log('get data from backend...');
    this.universityService.getUniversitysListFromApi().subscribe(
      (universityResponse) => {
        console.log('Success resp');
        console.log(universityResponse);
        this.universityList = universityResponse;
        
      },
      (errorResponse) => {
        console.log('Error Response');
        console.log(errorResponse)
      }
    );
  }

}
