import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UniversityCountApiResponseI } from './info/interfaces/university-count-api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  http = inject(HttpClient);


  getUnivWithCount(): Observable<UniversityCountApiResponseI> {
   return this.http.get<UniversityCountApiResponseI>('http://localhost:3010/api/info');
  }


  getUniversitiesByCode(code: string) {
    const url = `http://localhost:3010/api/universities?alpha_two_code=${code}`;
    return this.http.get<UniversityCountApiResponseI>(url);
  }

  
  buildString() {
    const firstName = 'Tom';
    const lastName = 'Henry';
      const fullName = `Hello ${firstName}, ${lastName}`;
      console.log(fullName);
      
  }

}
