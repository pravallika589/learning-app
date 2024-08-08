import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../../info.service';
import { UniversityCountApiResponseI, UniversityCountI } from '../interfaces/university-count-api-response';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  

  student = {
    id: 10,
    name: 'Apple'
  }

  universityNumberList: UniversityCountApiResponseI;

  router = inject(Router);
  infoService = inject(InfoService);
  communicationService = inject(CommunicationService);


  constructor() {
    this.getAllUniversitiesWithCount();
  }

  getAllUniversitiesWithCount() {
    
    this.infoService.getUnivWithCount().subscribe(
      (resp: UniversityCountApiResponseI) => {
        this.universityNumberList = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onNoOfUniv(selectedUniversity: UniversityCountI) {
    console.log(selectedUniversity);
    this.communicationService.setSelectedUniversityCode(selectedUniversity.countryCode);
    this.router.navigate(['info/details']);
    
  }



}
