import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlloAnalisiComponent } from './controllo-analisi.component';

describe('ControlloAnalisiComponent', () => {
  let component: ControlloAnalisiComponent;
  let fixture: ComponentFixture<ControlloAnalisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlloAnalisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlloAnalisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
