import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }


  getUniversitysListFromApi() {
    console.log('function in stu service called...');
  }
}
