import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  authService = inject(AuthService);
  userSignUpForm: FormGroup;
  name: string ;

  constructor() {
    this.createForm();
  }

  createForm() {
    this.name = 'Twitter';

    this.userSignUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      email: new FormControl(''),
      role: new FormControl(''),
      password: new FormControl('', [Validators.required, this.checkIfPasswordContainsOneSplChar, this.checkForSplChar ]),
    })
    console.log(this.userSignUpForm);
  }



  checkForSplChar(control: FormControl) {
    const specialCharPattern = /[!@#\$%\^\&*\)\(+=._-]/;
    const isSplChar = specialCharPattern.test(control.value);
    return isSplChar ? null : {shouldContainSplChar: true};
  }

  checkIfPasswordContainsOneSplChar(control: FormControl) {
    console.log(control.value);
    const containsNumber = /\d/.test(control.value);
    console.log(containsNumber);

    if(containsNumber) {
      return null;
    } else {
      return {shouldCOntainNumber: true}
    }
    
  }

  submitSignUpForm() {
    console.log(this.userSignUpForm);
    // console.log(this.userSignUpForm.value);

    // this.authService.sigUpApi(this.userSignUpForm.value).subscribe(
    //   (resp) => {
    //     console.log(resp)
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // );

  }

}
