import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SangueComponent } from './sangue.component';

describe('SangueComponent', () => {
  let component: SangueComponent;
  let fixture: ComponentFixture<SangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
