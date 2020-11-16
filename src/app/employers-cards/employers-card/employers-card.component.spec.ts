import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersCardComponent } from './employers-card.component';

describe('EmployersCardComponent', () => {
  let component: EmployersCardComponent;
  let fixture: ComponentFixture<EmployersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
