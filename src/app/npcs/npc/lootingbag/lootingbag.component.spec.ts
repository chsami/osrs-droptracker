/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LootingbagComponent } from './lootingbag.component';

describe('LootingbagComponent', () => {
  let component: LootingbagComponent;
  let fixture: ComponentFixture<LootingbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootingbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootingbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
