import { Component, inject, signal } from '@angular/core';
import { ArticleViewModel } from '@app/core/models';
import { ButtonComponent, InfoboxComponent } from '@app/shared/components';
import { ButtonSize, ButtonVariant, InfoboxType } from '@app/shared/enums';
import ArticlesJson from './articles.json';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  imports: [InfoboxComponent, SlicePipe, ButtonComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  public articles = signal<ArticleViewModel[]>(ArticlesJson?.map((article) => new ArticleViewModel(article as ArticleViewModel)) ?? []);

  protected readonly InfoboxType = InfoboxType;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public navigateTo(article?: ArticleViewModel): void {
    const url = article?.link;
    this.router.navigate([url], { relativeTo: this.route });
  }
}
