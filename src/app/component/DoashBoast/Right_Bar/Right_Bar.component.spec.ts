/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Right_BarComponent } from './Right_Bar.component';

describe('Right_BarComponent', () => {
  let component: Right_BarComponent;
  let fixture: ComponentFixture<Right_BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Right_BarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Right_BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
