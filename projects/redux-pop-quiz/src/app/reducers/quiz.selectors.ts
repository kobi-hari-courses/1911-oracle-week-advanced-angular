import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState, QuizFeatureKey } from './quiz.state';

export const selectState =
    createFeatureSelector<QuizState>(QuizFeatureKey);

export const selectCurrentQuestion = createSelector(
    selectState,
    state => state.questions[state.currentQuestionIndex]
);
