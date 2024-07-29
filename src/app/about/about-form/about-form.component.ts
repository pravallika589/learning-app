import { Component } from '@angular/core';
import { VehiclsService } from '../../vehicls.service';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.css'
})
export class AboutFormComponent {

  gamesListApiResp: any = [];
  label = 'Games Table'

  constructor(private vehiclsService: VehiclsService) {

  }


  getAllGames() {
    this.vehiclsService.getAllGamesFromApi().subscribe(
      (resp) => {
        console.log(resp);
        this.gamesListApiResp = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
