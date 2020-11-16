import { Component, OnInit } from '@angular/core';
import {Employer} from './Employer.interface';
import {EmployerService} from './employer.service';

@Component({
  selector: 'app-employers-cards',
  templateUrl: './employers-cards.component.html',
  styleUrls: ['./employers-cards.component.css']
})
export class EmployersCardsComponent implements OnInit {

  constructor(private employerService: EmployerService) { }
  employers: Employer[] = [];
  ngOnInit(): void {
    this.employers = this.employerService.getEmployers();
  }

}
