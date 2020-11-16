import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersCardsComponent } from './employers-cards.component';

describe('EmployersCardsComponent', () => {
  let component: EmployersCardsComponent;
  let fixture: ComponentFixture<EmployersCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
