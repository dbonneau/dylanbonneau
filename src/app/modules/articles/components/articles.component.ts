import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EInfoBox } from 'src/app/shared/components/infobox/infobox.component';
import { ROUTES } from 'src/app/shared/consts/routes';
import { Article } from '../../../core/models/article.model';
import articles from './articles.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  public articles: Article[] = [];
  public EInfoBox = EInfoBox;
  public ROUTES = ROUTES;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articles = articles?.map(
      (article) => new Article(article as unknown as Article)
    );
  }

  navigateTo(article?: Article): void {
    const url = article?.link;
    this.router.navigate([url], { relativeTo: this.route });
  }
}
