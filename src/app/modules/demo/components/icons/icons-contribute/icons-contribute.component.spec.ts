import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsContributeComponent } from './icons-contribute.component';

describe('IconsContributeComponent', () => {
  let component: IconsContributeComponent;
  let fixture: ComponentFixture<IconsContributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsContributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
