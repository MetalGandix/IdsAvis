import { TestBed } from '@angular/core/testing';

import { BasicAuthHttppInterceptorService } from './basic-auth-httpp-interceptor.service';

describe('BasicAuthHttppInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHttppInterceptorService = TestBed.get(BasicAuthHttppInterceptorService);
    expect(service).toBeTruthy();
  });
});
