import { TestBed } from '@angular/core/testing';

import { CONTACTService } from './contact.service';

describe('CONTACTService', () => {
  let service: CONTACTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CONTACTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
