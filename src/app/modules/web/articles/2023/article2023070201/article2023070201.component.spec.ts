import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2023070201Component } from './article2023070201.component';

describe('Article2023070201Component', () => {
  let component: Article2023070201Component;
  let fixture: ComponentFixture<Article2023070201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article2023070201Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article2023070201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
