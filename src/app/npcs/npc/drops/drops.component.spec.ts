/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropsComponent } from './drops.component';

describe('DropsComponent', () => {
  let component: DropsComponent;
  let fixture: ComponentFixture<DropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
