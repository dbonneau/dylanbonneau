import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2023031601Component } from './article2023031601.component';

describe('Article2023031601Component', () => {
  let component: Article2023031601Component;
  let fixture: ComponentFixture<Article2023031601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article2023031601Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article2023031601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
