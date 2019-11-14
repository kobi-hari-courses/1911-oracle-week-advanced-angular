import { QuizDoneComponent } from './components/quiz-done/quiz-done.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'question', pathMatch: 'full'}, 
  { path: 'question', component: QuestionPresenterComponent}, 
  { path: 'done', component: QuizDoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
