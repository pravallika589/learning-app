import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  companyList = ['Apple', 'Samsung', 'Hp'];
  empList: EmployeeI[]  = [
    {name: 'Tom', id: 10},
    {name: 'Zim', id: 20},
    {name: 'Apple', id: 30},
    {name: 'Facebook', id: 40},
  ];


  constructor() {

    this.companyList.forEach( (company) => {
      console.log(company)
    } );

    this.empList.forEach((emp: EmployeeI) => {
      console.log(emp)
    })





    for(let i=0; i<= this.empList.length; i++) {
      console.log(i)
      console.log(this.empList[i]);
    }
   
  }

}


interface EmployeeI {
  name: string;
  id: number
}


