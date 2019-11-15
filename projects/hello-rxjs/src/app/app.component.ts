import { Component } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      setTimeout(() => observer.next(5), 10000);
    });
    return res;
  }

  start() {
    let observer1 = this.createObserver(1);
    let observer2 = this.createObserver(2);

    let observable1 = this.createObservable();
    observable1.subscribe(observer1);    
  }
}
