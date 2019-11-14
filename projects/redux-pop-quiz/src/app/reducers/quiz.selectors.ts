import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState, QuizFeatureKey } from './quiz.state';
import { getCurrentIndex, isQuizDone } from './quiz.helpers';

export const selectState =
    createFeatureSelector<QuizState>(QuizFeatureKey);

export const selectCurrentIndex = createSelector(
    selectState, 
    state => getCurrentIndex(state)
);

export const selectIsDone = createSelector(
    selectState, 
    state => isQuizDone(state)
);

export const selectAllAnswers = createSelector(
    selectState, 
    state => state.answers
);

export const selectCurrentQuestion = createSelector(
    selectState,
    selectCurrentIndex,
    (state, index) => state.questions[index]
);

export const selectCorrectCount = createSelector(
    selectAllAnswers, 
    answers => answers.filter(a => a.isCorrect === true).length
);

export const selectWrongCount = createSelector(
    selectAllAnswers, 
    answers => answers.filter(a => a.isCorrect === false).length
);