import { Question } from '../models/question';
import { Answer } from '../models/answer';

export const QuizFeatureKey: string = 'quiz';

export interface QuizState {
  questions: Question[], 
  answers: Answer[], 
  currentQuestionIndex: number, 
  isQuizDone: boolean
}
