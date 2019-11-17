import { ColorModel } from './../../models/color.model';
import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-colors',
  templateUrl: './search-colors.component.html',
  styleUrls: ['./search-colors.component.css']
})
export class SearchColorsComponent implements OnInit {
  results: ColorModel[];  

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
  }

  async search(keyword: string) {
    console.log('searching ' + keyword);
    this.results = await this.colorsService.search(keyword);
  }

}
