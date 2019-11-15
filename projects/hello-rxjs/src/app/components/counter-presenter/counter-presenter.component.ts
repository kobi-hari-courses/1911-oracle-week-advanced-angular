import { CounterService } from './../../services/counter.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css']
})
export class CounterPresenterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counter$ = this.counterService.counter;
  }

}
