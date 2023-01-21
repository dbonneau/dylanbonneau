import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLibraryComponent } from './buttons-library.component';

describe('ButtonsLibraryComponent', () => {
  let component: ButtonsLibraryComponent;
  let fixture: ComponentFixture<ButtonsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
