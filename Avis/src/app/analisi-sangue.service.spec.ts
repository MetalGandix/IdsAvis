import { TestBed } from '@angular/core/testing';

import { AnalisiSangueService } from './analisi-sangue.service';

describe('AnalisiSangueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalisiSangueService = TestBed.get(AnalisiSangueService);
    expect(service).toBeTruthy();
  });
});
