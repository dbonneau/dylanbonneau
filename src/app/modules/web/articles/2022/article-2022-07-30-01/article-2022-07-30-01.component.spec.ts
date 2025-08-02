import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2022073001Component } from './article-2022-07-30-01.component';

describe('Article2022073001Component', () => {
  let component: Article2022073001Component;
  let fixture: ComponentFixture<Article2022073001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article2022073001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article2022073001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
