import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // router = inject(Router);

  constructor(private router: Router) {

  }


  navigateToHome() {
    console.log('Home')
    this.router.navigate(['home']);
  }

  navigateToStudent() {
    console.log('Student')
    this.router.navigate(['student']);
  }

  navigateToUniversity() {
    console.log('University')
    this.router.navigate(['university']);

  }

  navigateToAbout() {
    console.log('About')
    this.router.navigate(['about']);
  }
  

  navigateTo(routerPath: string) {
    this.router.navigate([routerPath]);
  }

  navigateToShopping() {
    console.log('Shopping');
    this.router.navigate(['shopping']);

  }

  navigateToInfo() {
    console.log('Info')
    this.router.navigate(['info']);

  }


  navigateToSignUp() {
    console.log('Signup')
    this.router.navigate(['signup']);

  }
  
  navigateToLogin() {
    console.log('Login')
    this.router.navigate(['login']);

  }

  /*
  add(value1: number, value2: number) {

  }

  getInfo(a: string, x: number, c: boolean) {

  }*/

  // someName() {

  // }


  // () {

  // }

  // () => {

  // }

  // someName = () => {

  // }


  // navigateTo1 = (routerPath: string) => {
    
  // }





}
