import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneComponent } from './prenotazione.component';

describe('PrenotazioneComponent', () => {
  let component: PrenotazioneComponent;
  let fixture: ComponentFixture<PrenotazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
