import { Component } from '@angular/core';

interface CustomerI {
  id: number;
  address: { street: string; city: string; state: string; zip: string };
  statsu: boolean;
  name: string;
  activeYears: number;
  productsPrice: number[];
}

interface ProductDetailsI {
  pId: string;
  pName: string;
  delAdd: AddressI
}

interface AddressI {
  street: string; 
  city: string; 
  state: string; 
  zip: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  studentApiResponse: any;

  name: string = 'Tom';
  id: number = 10;
  studentAge: number = 23;
  studentStatus: boolean = true;

  // arrays - []
  states: string[] = ['Virginia', 'NC', 'SC', 'Texas'];
  stateTemp: number[] = [30, 79];

  // states[1] - 'NC'

  // object - {}
  customer: CustomerI = {
    id: 10,
    address: {
      street: '9335 lee hwy',
      city: 'fairfax',
      state: 'va',
      zip: '22031',
    },
    statsu: true,
    name: 'tom',
    activeYears: 5,
    productsPrice: [100, 20, 800, 400, 40],
  };

  //this.customer.id
  //this.customer.name
  //this.customer.address
  //this.customer.address.state

  // pro: any = {
  //   p1: {},
  //   p2: {},
  //   p3: {}
  // }

  

  pr = {
    id: 10,
    pName: 'Mac'
  }
  // this.pr.pName

  
//this.products[0].pName - 


  products: ProductDetailsI[] = [
    {
      pId: 'xb101',
      pName: 'xbox',
      delAdd: {
        street: '9335 lee hwy',
        city: 'fairfax',
        state: 'va',
        zip: '22031',
      },
    },
    {
      pId: 'ps456',
      pName: 'play station',
      delAdd: {
        street: '9335 lee hwy',
        city: 'fairfax',
        state: 'ca',
        zip: '22031',
      },
    },
    {
      pId: 'COD2',
      pName: 'Call of Duty',
      delAdd: {
        street: '9335 lee hwy',
        city: 'fairfax',
        state: 'tx',
        zip: '22031',
      },
    },
    {
      pId: 'ip125',
      pName: 'iphone',
      delAdd: {
        street: '9335 lee hwy',
        city: 'fairfax',
        state: 'ny',
        zip: '22031',
      },
    },
  ];

  // this.products[3].delAdd.state 


  testValues() {
    console.log(this.products[3]);
    console.log(this.products[3].delAdd.state);
    console.log(this.customer.address.state);
    console.log(this.name);
    this.name = 'Virginia';
    console.log(this.name);

  }

  add() {

  }

  getStudentsInfo() {
    console.log('triggered...');
  }



}


  
