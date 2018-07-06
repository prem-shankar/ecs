/**
 * Created By : Prem Shankar
 */

import { TestBed, inject } from '@angular/core/testing';

import { PatientService } from './Patient.service';

describe('PatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService]
    });
  });

  it('should be created', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});


