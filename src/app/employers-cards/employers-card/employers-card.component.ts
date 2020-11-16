import {Component, Input, OnInit} from '@angular/core';
import {Employer} from '../Employer.interface';

@Component({
  selector: 'app-employers-card',
  templateUrl: './employers-card.component.html',
  styleUrls: ['./employers-card.component.css']
})
export class EmployersCardComponent implements OnInit {
@Input() employer: Employer;
  constructor() { }

  ngOnInit(): void {
  }

}
