import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  private selectedUniversityCode: string = '';

  setSelectedUniversityCode(code: string): void {
    this.selectedUniversityCode = code;
  }

  getSelectedUniversityCode(): string {
    return this.selectedUniversityCode;
  }
  
}
