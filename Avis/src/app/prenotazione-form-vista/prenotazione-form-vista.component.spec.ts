import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneFormVistaComponent } from './prenotazione-form-vista.component';

describe('PrenotazioneFormVistaComponent', () => {
  let component: PrenotazioneFormVistaComponent;
  let fixture: ComponentFixture<PrenotazioneFormVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioneFormVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioneFormVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
