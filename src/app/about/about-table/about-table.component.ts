import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-table',
  templateUrl: './about-table.component.html',
  styleUrl: './about-table.component.css'
})
export class AboutTableComponent implements OnChanges {

  @Input({required: true}) gamesList: any;
  @Input() tableLabel: string;


  ngOnChanges(): void {
      console.log('Data changed...')
  }


  

}
