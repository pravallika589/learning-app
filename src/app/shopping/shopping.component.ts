import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

  router = inject(Router);

  navigateToMens() {
    this.router.navigate(['shopping/mens']);
  }

  navigateToWomens() {
    this.router.navigate(['shopping/womens']);
  }
  navigateToKids() {
    this.router.navigate(['shopping/kids']);
  }

}
