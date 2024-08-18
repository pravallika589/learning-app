import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  http = inject(HttpClient);

  constructor() { }


  addNewStudentApi(student: any) {
    return this.http.post('http://localhost:3010/api/student', student)
  }



  studentDataFromAPi() {
   let response = this.http.get('http://localhost:3010/api/student');
   return response;

  }

 
}
