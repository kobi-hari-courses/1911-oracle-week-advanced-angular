import { Component } from '@angular/core';
import { Observer, Observable, interval, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subs: Subscription[] = [];

  createObserver(id: number): Observer<number> {
    console.info(`Created observer ${id}`);
    let res: Observer<number> = {
      next: val => console.log(`Observer ${id} next: ${val}`), 
      complete: () => console.log(`Observer ${id} completed`),
      error: err => console.log(`Observer ${id} error: ${err}`) 
    }
    return res;
  }

  createObservable(): Observable<number> {
    let res = new Observable<number>(observer => {
      observer.next(0);
      setTimeout(() => observer.next(1), 1000);
      setTimeout(() => observer.next(2), 3000);
      setTimeout(() => observer.next(3), 6000);
      setTimeout(() => observer.next(4), 8000);
      setTimeout(() => observer.complete(), 10000);
    });
    return res;
  }

  createSubject(): Observable<number> {
    let subject = new Subject<number>();
    setTimeout(() => subject.next(1), 1000);
    setTimeout(() => subject.next(2), 3000);
    setTimeout(() => subject.next(3), 6000);
    setTimeout(() => subject.next(4), 8000);
    setTimeout(() => subject.complete(), 10000);
    return subject;
}

  createInterval(): Observable<number> {
    return interval(1000);
  }

  start() {
    let observer1 = this.createObserver(1);
    let observable1 = this.createSubject();
    this.subs.push(observable1.subscribe(observer1));
    
    setTimeout(() => {
      let observer2 = this.createObserver(2);
      this.subs.push(observable1.subscribe(observer2));
    }, 4000);
  }

  stop() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
