import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  private selectedUniversityCode: string = '';
  userNameBs = new BehaviorSubject<string>('');
  userName$ = this.userNameBs.asObservable();

  setSelectedUniversityCode(code: string): void {
    this.selectedUniversityCode = code;
  }

  getSelectedUniversityCode(): string {
    return this.selectedUniversityCode;
  }


  setUserName(name: string) {
    this.userNameBs.next(name)
  }
  
}
