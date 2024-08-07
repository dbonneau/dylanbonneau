import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsLibraryComponent } from './colors-library.component';

describe('ColorsLibraryComponent', () => {
  let component: ColorsLibraryComponent;
  let fixture: ComponentFixture<ColorsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorsLibraryComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
