/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoashBoastComponent } from './DoashBoast.component';

describe('DoashBoastComponent', () => {
  let component: DoashBoastComponent;
  let fixture: ComponentFixture<DoashBoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoashBoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoashBoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
