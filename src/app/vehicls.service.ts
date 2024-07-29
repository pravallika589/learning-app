import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclsService {

  httpClient = inject(HttpClient);

  constructor() { }

  getAllGamesFromApi() {
   return this.httpClient.get('https://www.cheapshark.com/api/1.0/deals?upperPrice=15');
  }


  getVehiclesListFromApi() {

    console.log("calling function in service file");
    let response = this.httpClient.get ('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json');
    return response;


  }
}
