import { Answer } from './../models/answer';
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