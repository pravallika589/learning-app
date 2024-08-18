import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);


   authService = inject(AuthService);
   communicationService = inject(CommunicationService);

  userLoginForm: FormGroup = new FormGroup({
    userName: new FormControl('pravalika'),
    password: new FormControl('test123'),
  })



  loginUser() {
    console.log(this.userLoginForm);
    console.log(this.userLoginForm.value);
    const userLoginInfovalues = this.userLoginForm.value;
    this.authService.loginAPi(userLoginInfovalues).subscribe(
      (response)=> {
        console.log(response);
        this.communicationService.setUserName(response['data']['user']['userName']);
        this.router.navigate(['home']);
      },
      (error)=> {
        console.log(error);

      }

    )
    

  }

}
