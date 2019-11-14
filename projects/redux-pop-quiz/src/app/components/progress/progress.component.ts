import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/models/answer';
import { Store } from '@ngrx/store';
import { QuizSelectors } from 'src/app/reducers/quiz.types';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  data$: Observable<Answer[]>

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.data$ = this.store.select(QuizSelectors.selectAllAnswers);
  }

}
