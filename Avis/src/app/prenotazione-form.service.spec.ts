import { TestBed } from '@angular/core/testing';

import { PrenotazioneFormService } from './prenotazione-form.service';

describe('PrenotazioneFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrenotazioneFormService = TestBed.get(PrenotazioneFormService);
    expect(service).toBeTruthy();
  });
});
