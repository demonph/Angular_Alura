/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BankServiceService } from './bankService.service';

describe('Service: BankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankServiceService]
    });
  });

  it('should ...', inject([BankServiceService], (service: BankServiceService) => {
    expect(service).toBeTruthy();
  }));
});
