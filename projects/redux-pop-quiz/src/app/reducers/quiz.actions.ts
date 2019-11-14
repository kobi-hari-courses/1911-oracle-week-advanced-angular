import { createAction, props } from '@ngrx/store';

export const reset = createAction(
    '[Quiz Actions] Reset'
);

export const answerCurrentQuestion = createAction(
    '[Quiz Actions] Anser Current Question', 
    props<{answerIndex: number}>()
);