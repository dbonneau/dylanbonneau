import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EInfoBox } from 'src/app/shared/components/infobox/infobox.component';
import { ROUTES } from 'src/app/shared/consts/routes';
import { Article } from '../../../core/models/article.model';
import { AirtableService } from '../../../core/services/airtable.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  public articles?: Article[];
  public lastArticle?: Article;
  public loading?: boolean;
  public error?: boolean;
  public EInfoBox = EInfoBox;
  public ROUTES = ROUTES;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _airtableService: AirtableService
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }

  navigateTo(article?: Article): void {
    const url = article?.fields?.link;
    this._router.navigate([url], { relativeTo: this._route });
  }

  getArticles() {
    this.loading = true;
    this.error = false;
    this._airtableService.getArticles().subscribe({
      next: (response: Article[]) => {
        this.articles = response.sort((a: Article, b: Article) => {
          return a.createdTime.valueOf() - b.createdTime.valueOf();
        }).reverse();
        this.getActivedArticles();
        this.getLastArticles();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      },
    });
  }

  getActivedArticles() {
    this.articles = this.articles?.filter((article) => {
      return article?.fields?.active;
    });
  }

  getLastArticles() {
    this.lastArticle = this.articles?.shift();
  }
}
