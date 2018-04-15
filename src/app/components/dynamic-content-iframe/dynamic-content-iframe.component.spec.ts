import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentIframeComponent } from './dynamic-content-iframe.component';

describe('DynamicContentIframeComponent', () => {
  let component: DynamicContentIframeComponent;
  let fixture: ComponentFixture<DynamicContentIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
