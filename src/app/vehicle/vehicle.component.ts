import { Component, inject } from '@angular/core';
import { VehiclsService } from '../vehicls.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {

  vehicleService = inject(VehiclsService);


  getDataFromApi(): any {
    console.log("geting data from backend..");
    this.vehicleService.getVehiclesListFromApi().subscribe(
      () => {},
      () => {}
      
  
    );

  }

}


