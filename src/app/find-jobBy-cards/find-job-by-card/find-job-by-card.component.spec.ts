import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobByCardComponent } from './find-job-by-card.component';

describe('FindJobByCardComponent', () => {
  let component: FindJobByCardComponent;
  let fixture: ComponentFixture<FindJobByCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindJobByCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
