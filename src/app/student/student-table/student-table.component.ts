import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  
  @Input() studentList: any;

  constructor() {
    this.setData();
  }

  ngOnChanges() {
    console.log(this.studentList);
  }

  setData() {
    const names: string[] = ['apple', 'facebook', 'twitter'];
    const studentsList = [
      {id: '1', name: 'Apple', year: 2022},
      {id: '2', name: 'Insta', year: 2021},
      {id: '3', name: 'Twitter', year: 2024}
    ];

    const filteredResults = studentsList.filter( (x) => x.year >= 2022 )

    console.log(filteredResults)

    studentsList.map((stu) => {
      if(stu.year >= 2022) {
        console.log('Junior');
      } else {
        console.log('Senior')
      }
    });

    

    names.forEach( (x) => {
      console.log(x);
    });

    const convertedData = names.map((name) => {
      let uppperCaseElement = name.toLocaleUpperCase();
      return uppperCaseElement;
    })
    console.log(convertedData);

    const elementFund = names.find((name) =>  name === 'facebook');
    console.log(elementFund);
    

  }

  // forEach
  // map
  // find
  // filter



  // cust = {
  //   name: 'Tom',
  //   email: 't@gmail.com',
  //   products: [
  //     {productName: 'xbox'},
  //     {productName: 'play station'}

  //   ]
    
    
  // }

  // cust.productName

  // add(n1: number) {
    
  // }

  // (n1: number) => {

  // }

  // add3(n1, n2) {
  //   return n1+n2;
  // }

  // add5 = (n1, n2) => {
  //   return n1+n2;
  // }

  // add8 =(n1, n2) => n1+n2;

  // add4(n1, n2) {
  //   let c = n1+n2;
  //   return c;
  // }

  // add6= (n1, n2) => {
  //   let c = n1+n2;
  //   return c;
  // }

  // add61 = (n1, n2) => {
  //   let c = n1+n2;
  //   return c;
  // }
    
  



}
