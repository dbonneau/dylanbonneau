import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LumysService {
  protected readonly http: HttpClient = inject(HttpClient);

  public getLumisData(): Observable<any> {
    return this.http.get<any>('https://app.lumys.photo/api/widget?apiKey=s4vk39fwhlesfcmp');
  }
}
