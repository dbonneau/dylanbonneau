import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '@app/models/article.model';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { EInfoBox, InfoboxComponent } from 'src/app/shared/components/infobox/infobox.component';
import { ROUTES } from 'src/app/shared/consts/routes';

import ArticlesJson from './articles.json';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, InfoboxComponent, HeaderComponent, FooterComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[] = [];
  public EInfoBox = EInfoBox;
  public ROUTES = ROUTES;

  private articlesJson = ArticlesJson as Article[];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.articles = this.articlesJson?.map((article) => new Article(article));
  }

  public navigateTo(article?: Article): void {
    const url = article?.link;
    this.router.navigate([url], { relativeTo: this.route });
  }
}
