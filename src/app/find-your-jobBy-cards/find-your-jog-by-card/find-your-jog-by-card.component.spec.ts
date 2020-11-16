import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourJogByCardComponent } from './find-your-jog-by-card.component';

describe('FindYourJogByCardComponent', () => {
  let component: FindYourJogByCardComponent;
  let fixture: ComponentFixture<FindYourJogByCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourJogByCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourJogByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
