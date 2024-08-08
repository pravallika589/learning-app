import { Component, inject, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { SpinnerService } from '../spinner.service';
import { UniversityDetailsI } from '../interfaces/UniversityDetailsApiResponseI';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css',
})
export class UniversityComponent implements OnInit {

  universityList: UniversityDetailsI[] = [];

  universityService = inject(UniversityService);
  spinnerService = inject(SpinnerService);

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.spinnerService.isLoading.next(true);

    console.log('get data from backend...');
    this.universityService.getUniversitysListFromApi().subscribe(
      (universityResponse) => {
        console.log('Success resp');
        console.log(universityResponse);
        this.universityList = universityResponse.data;
        this.spinnerService.isLoading.next(false);

      },
      (errorResponse) => {
        console.log('Error Response');
        console.log(errorResponse);
        this.spinnerService.isLoading.next(false);

      }
    );
  }

}
