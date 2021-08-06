import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyComponent } from './only.component';

describe('OnlyComponent', () => {
  let component: OnlyComponent;
  let fixture: ComponentFixture<OnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
