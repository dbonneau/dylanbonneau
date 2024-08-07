import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLibraryComponent } from './forms-library.component';

describe('FormsLibraryComponent', () => {
  let component: FormsLibraryComponent;
  let fixture: ComponentFixture<FormsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsLibraryComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
