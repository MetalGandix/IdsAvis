import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDonatoreComponent } from './form-donatore.component';

describe('FormDonatoreComponent', () => {
  let component: FormDonatoreComponent;
  let fixture: ComponentFixture<FormDonatoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDonatoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDonatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
