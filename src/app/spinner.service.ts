import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading = new BehaviorSubject<boolean>(false);
  apiCallStatus = this.isLoading.asObservable();


  constructor() { }

  // apiInProgress(loading: boolean) {
  //   this.isLoading.next(loading);
  // }
}
