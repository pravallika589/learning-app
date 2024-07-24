import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  http = inject(HttpClient);

  // constructor(private http: HttpClient) {

  // }

  getUniversitysListFromApi() {
    console.log('funct service...')
    let response =  this.http.get('http://universities.hipolabs.com/search?country=United+Kingdom');
    return response;
  }
}


// C - Creat  - POST
// R - Retrieve - GET
// U - Update - PUT
// D - Delete - Delete
