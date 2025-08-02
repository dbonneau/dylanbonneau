import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTokenTypographyComponent } from './design-token-typography.component';

describe('DesignTokenTypographyComponent', () => {
  let component: DesignTokenTypographyComponent;
  let fixture: ComponentFixture<DesignTokenTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTokenTypographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignTokenTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
