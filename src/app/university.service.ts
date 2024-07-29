import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { UniversityDetailsApiResponseI } from './interfaces/UniversityDetailsApiResponseI';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  http = inject(HttpClient);

  // constructor(private http: HttpClient) {

  // }

  getUniversitysListFromApi(): Observable<UniversityDetailsApiResponseI[]> {
    console.log('funct service...')
    let response =  this.http.get<UniversityDetailsApiResponseI[]>('http://universities.hipolabs.com/search?country=United+Kingdom').pipe(delay(4000));
    return response;
  }
}


// C - Creat  - POST
// R - Retrieve - GET
// U - Update - PUT
// D - Delete - Delete


// {
//   fn: '',
//   sn: '',
//   data: ''
// }