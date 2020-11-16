import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobByFiltersComponent } from './find-job-by-filters.component';

describe('FindJobByFiltersComponent', () => {
  let component: FindJobByFiltersComponent;
  let fixture: ComponentFixture<FindJobByFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindJobByFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobByFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
