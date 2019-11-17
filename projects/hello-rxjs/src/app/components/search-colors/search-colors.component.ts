import { debounceTime, distinctUntilChanged, map, mergeMap, switchMap } from 'rxjs/operators';
import { ColorModel } from './../../models/color.model';
import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-colors',
  templateUrl: './search-colors.component.html',
  styleUrls: ['./search-colors.component.css']
})
export class SearchColorsComponent implements OnInit {
  keyword$ = new BehaviorSubject<string>('');
  searches$ = this.keyword$.pipe(
    debounceTime(500), 
    distinctUntilChanged()
  );

  // WRONG!
  // results$ = this.searches$.pipe(
  //   map(word => this.colorsService.search(word))
  // );

  // Technically correct, but shows cancelled results!
  // results$ = this.searches$.pipe(
  //   map(word => this.colorsService.search(word))
  // );

  results$ = this.searches$.pipe(
    switchMap(word => this.colorsService.search(word))
  );

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
  }

  search(keyword: string) {
    this.keyword$.next(keyword);
  }

}
