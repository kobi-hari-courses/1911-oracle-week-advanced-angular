import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizSelectors } from '../reducers/quiz.types';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { getRouterState } from '../reducers/quiz.helpers';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLogicService {
  private subs: Subscription[] = [];

  constructor(
    private store: Store<any>, 
    private router: Router
    ) { }

  start() {
    let sub = this.store.select(QuizSelectors.selectState)
      .pipe(
        map(state => getRouterState(state)), 
        distinctUntilChanged()
        )
      .subscribe(val => this.router.navigate([val]));

      this.subs.push(sub);
  }

  dispose() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }
}
