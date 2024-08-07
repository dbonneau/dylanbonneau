import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDemoComponent } from './menu-demo.component';

describe('MenuDemoComponent', () => {
  let component: MenuDemoComponent;
  let fixture: ComponentFixture<MenuDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuDemoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
