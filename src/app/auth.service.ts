import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  sigUpApi(userSignupInfo: any) {
    console.log(userSignupInfo);
    
    return this.http.post('http://localhost:3010/api/signup', userSignupInfo);
  }




  loginAPi(loginInfo: any) {
   return this.http.post('http://localhost:3010/api/login', loginInfo);

  }
}

// POST - http://localhost:3010/api/signup
// {
//     userName: string,
//     password: string
//     email: string
//     role: string
// }