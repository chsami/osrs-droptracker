/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NpcsService } from './npcs.service';

describe('Service: Npcs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NpcsService]
    });
  });

  it('should ...', inject([NpcsService], (service: NpcsService) => {
    expect(service).toBeTruthy();
  }));
});