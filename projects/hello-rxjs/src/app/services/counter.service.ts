import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private readonly counter$ = new BehaviorSubject<number>(0);
  get counter(): Observable<number> { return this.counter$.asObservable(); }

  increment() {
    this.counter$.next(this.counter$.value + 1);
  }

  decrement() {
    this.counter$.next(this.counter$.value - 1);
  }

}
