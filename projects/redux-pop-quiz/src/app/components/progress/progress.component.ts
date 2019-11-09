import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  data: (boolean | null)[] = [
    false, 
    true, 
    false, 
    true, 
    null, 
    null, 
    null
  ]

  constructor() { }

  ngOnInit() {
  }

}
