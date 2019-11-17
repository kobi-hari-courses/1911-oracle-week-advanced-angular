import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-colors',
  templateUrl: './search-colors.component.html',
  styleUrls: ['./search-colors.component.css']
})
export class SearchColorsComponent implements OnInit {

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
  }

  async search() {
    console.log('searching green');
    let results = await this.colorsService.search('green');
    console.log(results);
  }

}
