import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article_2022_07_30_01_Component } from './article-2022-07-30-01.component';

describe(Article_2022_07_30_01_Component.name, () => {
  let component: Article_2022_07_30_01_Component;
  let fixture: ComponentFixture<Article_2022_07_30_01_Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Article_2022_07_30_01_Component]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Article_2022_07_30_01_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
