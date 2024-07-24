import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent {

  name : string = " John";
  id : number = 10;


  constructor() {
    let res = this.add(10,20)
    console.log(res);
   let result =  this.add1(30,40);
   console.log(result);
  }

  acheivements() {
    
  }

  add(v1: number, v2: number): number {
    let c = v1+v2;
    return c;
  }

  add1(v1: number, v2: number): void {
    let c = v1+v2;
  }



}
