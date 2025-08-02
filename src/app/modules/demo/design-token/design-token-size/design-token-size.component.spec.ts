import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTokenSizeComponent } from './design-token-size.component';

describe('DesignTokenSizeComponent', () => {
  let component: DesignTokenSizeComponent;
  let fixture: ComponentFixture<DesignTokenSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTokenSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignTokenSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
