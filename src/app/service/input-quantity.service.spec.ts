import { TestBed } from '@angular/core/testing';

import { InputQuantityService } from './input-quantity.service';

describe('InputQuantityService', () => {
  let service: InputQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
