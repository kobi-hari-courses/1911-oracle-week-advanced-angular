import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;

  private readonly counter$ = new BehaviorSubject<number>(0);
  // private readonly counter$ = new Subject<number>();
  get counter(): Observable<number> { return this.counter$.asObservable(); }

  increment() {
    this.counter$.next(++this.value);
  }

  decrement() {
    this.counter$.next(--this.value);
  }

}
