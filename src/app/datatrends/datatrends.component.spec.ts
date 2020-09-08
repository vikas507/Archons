import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatrendsComponent } from './datatrends.component';

describe('DatatrendsComponent', () => {
  let component: DatatrendsComponent;
  let fixture: ComponentFixture<DatatrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
