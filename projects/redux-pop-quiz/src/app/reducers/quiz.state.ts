import { AllQuestions } from './../models/all-questions';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { initialAnswers } from './quiz.helpers';

export const QuizFeatureKey: string = 'quiz';

export interface QuizState {
  questions: Question[], 
  answers: Answer[], 
  currentQuestionIndex: number, 
  isQuizDone: boolean
}

export const initialQuizState: QuizState = {
  questions: AllQuestions, 
  answers: initialAnswers(AllQuestions.length), 
  currentQuestionIndex: 0, 
  isQuizDone: false
}
