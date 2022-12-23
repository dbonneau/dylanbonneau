import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Gallery } from '../models/gallery.model';

@Injectable()
export class AirtableService {
  private readonly key = 'appt9Nmbbtbip0WiG';
  constructor(private http: HttpClient) {}

  private _getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${process.env.airtable}`,
    });
  }

  public getWeddings(): Observable<Gallery[]> {
    return this.http
      .get(`https://api.airtable.com/v0/${this.key}/Table%201`, {
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
      .get(`https://api.airtable.com/v0/${this.key}/Table%201/${weddingId}`, {
        headers: this._getHeaders(),
      })
      .pipe(
        map((response: any) => {
          return new Gallery(response);
        })
      );
  }
}
