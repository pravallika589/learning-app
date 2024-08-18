import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../api-services/student.service';

@Component({
  selector: 'app-student-create-form',
  templateUrl: './student-create-form.component.html',
  styleUrl: './student-create-form.component.css',
})
export class StudentCreateFormComponent {

  studentDataList: any = {};

  studentService = inject(StudentService)
  createStudentForm: FormGroup;

  constructor() {
    this.createForm();
    this.studentInfo();
  }

  createForm() {
    this.createStudentForm = new FormGroup({
      studentName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      studentId: new FormControl(''),
      studentPhoneNumber: new FormControl(''),
      course: new FormControl(''),
      year: new FormControl(''),
      country: new FormControl(''),
    });
  }

  addStudent() {
    console.log('hello....');
    console.log(this.createStudentForm);
    console.log(this.createStudentForm.valid)
    
    // this.studentService.addNewStudentApi(this.createStudentForm.value).subscribe(
    //   (resp) => {
    //     console.log(resp);
    //     console.log(this.createStudentForm);
    //     this.studentInfo();
    //     this.createStudentForm.reset()
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    
  }


  studentInfo() {
    console.log('calling function in service file...')
    this.studentService.studentDataFromAPi().subscribe(
      (studentResponse) => {
        
        this.studentDataList = studentResponse;
        console.log(this.studentDataList)
        this.studentDataList.data.map(() => {})

      },

      (errorReponse) => {
        console.log(errorReponse)

      }

    );



  }



}
