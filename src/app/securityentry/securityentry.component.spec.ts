import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityentryComponent } from './securityentry.component';

describe('SecurityentryComponent', () => {
  let component: SecurityentryComponent;
  let fixture: ComponentFixture<SecurityentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
