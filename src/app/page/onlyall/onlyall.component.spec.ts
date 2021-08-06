import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyallComponent } from './onlyall.component';

describe('OnlyallComponent', () => {
  let component: OnlyallComponent;
  let fixture: ComponentFixture<OnlyallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
