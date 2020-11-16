import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchServiceComponent } from './couch-service.component';

describe('CouchServiceComponent', () => {
  let component: CouchServiceComponent;
  let fixture: ComponentFixture<CouchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
