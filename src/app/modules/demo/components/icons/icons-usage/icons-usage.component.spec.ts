import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsUsageComponent } from './icons-usage.component';

describe('IconsUsageComponent', () => {
  let component: IconsUsageComponent;
  let fixture: ComponentFixture<IconsUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsUsageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
