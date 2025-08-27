import { Injectable, Inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private title: Title,
    private meta: Meta
  ) {}

  public updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  public updateDescription(desc: string): void {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  public createLinkForCanonicalURL(url?: string): void {
    const head = this.document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element === null) {
      element = this.document.createElement('link');
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url ?? this.document.URL);
  }
}
