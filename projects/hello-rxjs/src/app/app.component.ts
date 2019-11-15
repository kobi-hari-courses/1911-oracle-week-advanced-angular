import { Component } from '@angular/core';
import { Observer } from 'rxjs';

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

  start() {
    let o1 = this.createObserver(1);
    let o2 = this.createObserver(2);
  }
}
