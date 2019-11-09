import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.scss']
})
export class QuestionPresenterComponent implements OnInit {
  caption: string = 'What do you get when you mix red and yellow';
  answers: string[] = [
    'White', 
    'Orange', 
    'Pink', 
    'Green'
  ];


  constructor() { }

  ngOnInit() {
  }

}
