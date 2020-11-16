import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourJobByCardsComponent } from './find-your-job-by-cards.component';

describe('FindYourJobByCardsComponent', () => {
  let component: FindYourJobByCardsComponent;
  let fixture: ComponentFixture<FindYourJobByCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourJobByCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourJobByCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
