import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2023082901Component } from './article2023082901.component';

describe('Article2023082901Component', () => {
  let component: Article2023082901Component;
  let fixture: ComponentFixture<Article2023082901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article2023082901Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article2023082901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
