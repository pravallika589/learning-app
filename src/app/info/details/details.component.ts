import { Component, inject } from '@angular/core';
import { InfoService } from '../../info.service';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  infoService = inject(InfoService);
  communicationService = inject(CommunicationService);


  constructor() {
    const countryCode = this.communicationService.getSelectedUniversityCode();
    this.getUniversitiesByCountryCode(countryCode)
  }



  getUniversitiesByCountryCode(countryCode: string) {
    this.infoService.getUniversitiesByCode(countryCode).subscribe(
      (response) => {
        console.log(response);
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
