import { RouterLogicService } from './services/router-logic.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizActions } from './reducers/quiz.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'redux-pop-quiz';

  constructor(
    private store: Store<any>, 
    private routerLogic: RouterLogicService){}

  ngOnInit(): void {
    this.routerLogic.start();
  }

  ngOnDestroy(): void {
    this.routerLogic.dispose();
  }

  reset() {
    this.store.dispatch(QuizActions.reset());
  }
}


