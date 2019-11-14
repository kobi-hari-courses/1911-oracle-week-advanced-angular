import { initialQuizState } from './quiz.state';
import { createReducer } from '@ngrx/store';

export const quizReducer = createReducer(initialQuizState);