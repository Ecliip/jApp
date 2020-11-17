import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionMainComponent } from './orientacion-main.component';

describe('OrientacionMainComponent', () => {
  let component: OrientacionMainComponent;
  let fixture: ComponentFixture<OrientacionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientacionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
