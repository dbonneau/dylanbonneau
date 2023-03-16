import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article.model';
import { Gallery } from '../models/gallery.model';

@Injectable()
export class AirtableService {
  private readonly key = 'appt9Nmbbtbip0WiG';
  constructor(private http: HttpClient) {}

  private _getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${environment.airtable}`,
    });
  }

  public getWeddings(): Observable<Gallery[]> {
    return this.http
      .get(`https://api.airtable.com/v0/${this.key}/wedding`, {
        headers: this._getHeaders(),
      })
      .pipe(
        map((response: any) => {
          return response.records?.map((item: any) => {
            return new Gallery(item);
          });
        })
      );
  }

  public getWedding(weddingId: string): Observable<Gallery> {
    return this.http
      .get(`https://api.airtable.com/v0/${this.key}/wedding/${weddingId}`, {
        headers: this._getHeaders(),
      })
      .pipe(
        map((response: any) => {
          return new Gallery(response);
        })
      );
  }

  public getArticles(): Observable<Article[]> {
    return this.http
      .get(`https://api.airtable.com/v0/${this.key}/articles`, {
        headers: this._getHeaders(),
      })
      .pipe(
        map((response: any) => {
          return response.records?.map((item: any) => {
            return new Article(item);
          });
        })
      );
  }

  public getArticle(articleId: string): Observable<Article> {
    return this.http
      .get(`https://api.airtable.com/v0/${this.key}/articles/${articleId}`, {
        headers: this._getHeaders(),
      })
      .pipe(
        map((response: any) => {
          return new Article(response);
        })
      );
  }
}
