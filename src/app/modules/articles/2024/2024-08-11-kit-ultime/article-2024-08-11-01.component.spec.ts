import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article_2024_08_11_01_Component } from './article-2024-08-11-01.component';

describe(Article_2024_08_11_01_Component.name, () => {
  let component: Article_2024_08_11_01_Component;
  let fixture: ComponentFixture<Article_2024_08_11_01_Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Article_2024_08_11_01_Component]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Article_2024_08_11_01_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
