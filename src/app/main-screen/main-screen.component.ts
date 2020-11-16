import { Component, OnInit } from '@angular/core';
import {FilterService} from '../find-job-by-filters/filter.service';
import {Filter} from '../find-job-by-filters/Filter.interface';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  filtersOther: Filter[] = [];
  filtersLocation: Filter[] = [];

  constructor(private filterService: FilterService) {
    this.filtersOther = this.filterService.getFiltersOther();
    this.filtersLocation = this.filterService.getFiltersLocation();
  }

  ngOnInit(): void {
  }

}
