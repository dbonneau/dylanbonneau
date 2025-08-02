import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTokenColorComponent } from './design-token-color.component';

describe('DesignTokenColorComponent', () => {
  let component: DesignTokenColorComponent;
  let fixture: ComponentFixture<DesignTokenColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTokenColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignTokenColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
