import { Answer } from './../models/answer';
import { Question } from '../models/question';
import { QuizState } from './quiz.state';
export function initialAnswers(count: number): Answer[] {
    let res: Answer[] = [];

    for (let index = 0; index < count; index++) {
        res.push({
            userAnswer: null, 
            isCorrect: null
        });        
    }

    return res;
}

export function getCurrentIndex(state: QuizState): number {
    return state.answers.findIndex(a => a.userAnswer === null);
}

export function isQuizDone(state:QuizState): boolean {
    return state.answers.filter(a => a.userAnswer === null)
                .length === 0;
}

export function updateAnswer(state: QuizState, answerIndex: number): QuizState {
    let answers = [...state.answers];
    let index = getCurrentIndex(state);

    answers[index] = {
        userAnswer: answerIndex, 
        isCorrect: (state.questions[index].correctAnswer === answerIndex)
    };

    return {
        ...state, 
        answers: answers
    }
}