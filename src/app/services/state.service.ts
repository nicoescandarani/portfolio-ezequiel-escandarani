import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  mode: BehaviorSubject<string> = new BehaviorSubject<string>('night');

  get mode$(): Observable<string> {
    return this.mode.asObservable();
  }

  set modeValue(value: string) {
    localStorage.setItem('mode', value);
    this.mode.next(value);
  }
}
