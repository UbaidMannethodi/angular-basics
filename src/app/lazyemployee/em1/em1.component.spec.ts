import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Em1Component } from './em1.component';

describe('Em1Component', () => {
  let component: Em1Component;
  let fixture: ComponentFixture<Em1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Em1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Em1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
