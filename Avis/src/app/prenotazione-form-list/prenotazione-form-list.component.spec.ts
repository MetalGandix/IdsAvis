import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioneFormListComponent } from './prenotazione-form-list.component';

describe('PrenotazioneFormListComponent', () => {
  let component: PrenotazioneFormListComponent;
  let fixture: ComponentFixture<PrenotazioneFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioneFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioneFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
