/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_componetComponent } from './Main_componet.component';

describe('Main_componetComponent', () => {
  let component: Main_componetComponent;
  let fixture: ComponentFixture<Main_componetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_componetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_componetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
