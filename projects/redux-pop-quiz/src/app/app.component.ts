import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizActions } from './reducers/quiz.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-pop-quiz';

  constructor(private store: Store<any>){}

  reset() {
    this.store.dispatch(QuizActions.reset());
  }
}


