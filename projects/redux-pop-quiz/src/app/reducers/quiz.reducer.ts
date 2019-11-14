import { initialQuizState } from './quiz.state';
import { createReducer, on } from '@ngrx/store';
import { QuizActions } from './quiz.types';
import { updateAnswer } from './quiz.helpers';

export const quizReducer = createReducer(initialQuizState, 
    on(QuizActions.reset, () => {
        return initialQuizState
    }), 
    on(QuizActions.answerCurrentQuestion, (state, action) => {
        return updateAnswer(state, action.answerIndex)
    })    
);