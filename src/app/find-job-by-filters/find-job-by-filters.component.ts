import {Component, Input, OnInit} from '@angular/core';
import {Filter} from './Filter.interface';
import {FilterService} from './filter.service';

@Component({
  selector: 'app-find-job-by-filters',
  templateUrl: './find-job-by-filters.component.html',
  styleUrls: ['./find-job-by-filters.component.css']
})
export class FindJobByFiltersComponent implements OnInit {
@Input() filters;
  constructor() { }

  ngOnInit(): void {
  }

}
