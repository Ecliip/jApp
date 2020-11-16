import {Component, Input, OnInit} from '@angular/core';
import {Filter} from '../Filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@Input() filter: Filter;
  constructor() { }

  ngOnInit(): void {
  }

}
