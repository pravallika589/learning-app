import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-table',
  templateUrl: './about-table.component.html',
  styleUrl: './about-table.component.css'
})
export class AboutTableComponent {

  @Input() gamesList: any;

  // @Input() name: string = '';
  // @Input() email: string = '';



  

}
