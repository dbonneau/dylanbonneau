import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2024081101Component } from './article2024081101.component';

describe('Article2024081101Component', () => {
  let component: Article2024081101Component;
  let fixture: ComponentFixture<Article2024081101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article2024081101Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article2024081101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
