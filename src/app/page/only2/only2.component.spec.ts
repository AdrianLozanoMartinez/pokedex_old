import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Only2Component } from './only2.component';

describe('Only2Component', () => {
  let component: Only2Component;
  let fixture: ComponentFixture<Only2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Only2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Only2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
