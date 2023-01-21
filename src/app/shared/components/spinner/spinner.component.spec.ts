import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { spinnerComponent } from './spinner.component';

describe('spinnerComponent', () => {
  let component: spinnerComponent;
  let fixture: ComponentFixture<spinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ spinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(spinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
