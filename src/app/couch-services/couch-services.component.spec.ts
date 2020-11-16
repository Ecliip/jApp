import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchServicesComponent } from './couch-services.component';

describe('CouchServicesComponent', () => {
  let component: CouchServicesComponent;
  let fixture: ComponentFixture<CouchServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
