import { Component } from '@angular/core';
import { VehiclsService } from '../../vehicls.service';
import { SpinnerService } from '../../spinner.service';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.css'
})
export class AboutFormComponent {

  gamesListApiResp: any = [];
  label = 'Games Table'

  constructor(private vehiclsService: VehiclsService, private spinnerService: SpinnerService) {

  }


  getAllGames() {
    this.spinnerService.isLoading.next(true);
    this.vehiclsService.getAllGamesFromApi().subscribe(
      (resp) => {
        console.log(resp);
        this.gamesListApiResp = resp;
        this.spinnerService.isLoading.next(false);
      },
      (error) => {
        console.log(error);
        this.spinnerService.isLoading.next(false);

      }
    );
  }

}
