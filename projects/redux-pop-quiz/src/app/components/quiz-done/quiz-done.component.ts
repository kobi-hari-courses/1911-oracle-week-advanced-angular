import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { QuizSelectors } from 'src/app/reducers/quiz.types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.scss']
})
export class QuizDoneComponent implements OnInit {
  correct$: Observable<number>;
  wrong$: Observable<number>;
  total$: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.correct$ = this.store.select(QuizSelectors.selectCorrectCount);
    this.wrong$ = this.store.select(QuizSelectors.selectWrongCount);
    this.total$ = combineLatest(this.correct$, this.wrong$)
                    .pipe(map(pair => pair[0] + pair[1]));
  }

}
