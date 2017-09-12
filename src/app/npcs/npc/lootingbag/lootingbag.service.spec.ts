/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LootingbagService } from './lootingbag.service';

describe('Service: Lootingbag', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LootingbagService]
    });
  });

  it('should ...', inject([LootingbagService], (service: LootingbagService) => {
    expect(service).toBeTruthy();
  }));
});