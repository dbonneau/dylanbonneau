import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-article-2022-07-30-01',
  imports: [],
  templateUrl: './article-2022-07-30-01.component.html',
  styleUrl: './article-2022-07-30-01.component.scss'
})
export class Article2022073001Component {
@ViewChild('preparatifs') private preparatifs?: ElementRef<HTMLDivElement>;
  public preparatifsIsActive = false;

  @ViewChild('mairie') private mairie?: ElementRef<HTMLDivElement>;
  public mairieIsActive = false;

  @ViewChild('eglise') private eglise?: ElementRef<HTMLDivElement>;
  public egliseIsActive = false;

  @ViewChild('pause') private pause?: ElementRef<HTMLDivElement>;
  public pauseIsActive = false;

  @ViewChild('soiree') private soiree?: ElementRef<HTMLDivElement>;
  public soireeIsActive = false;

  @HostListener('window:scroll', ['$event']) public isScrolledStyle(): void {
    this.preparatifsIsActive = this.isScrolledIntoView(this.preparatifs);
    this.mairieIsActive = this.isScrolledIntoView(this.mairie);
    this.egliseIsActive = this.isScrolledIntoView(this.eglise);
    this.pauseIsActive = this.isScrolledIntoView(this.pause);
    this.soireeIsActive = this.isScrolledIntoView(this.soiree);
  }

  public isScrolledIntoView(elementRef?: ElementRef<HTMLDivElement>): boolean {
    let result = false;
    if (elementRef) {
      const element = elementRef.nativeElement;
      const rect = element.getBoundingClientRect();
      const maxHeight = rect.bottom - rect.top;
      const startToTop = window.innerHeight / 2;
      result =
        (rect.top < startToTop || rect.top < -maxHeight - startToTop) &&
        (rect.bottom >= startToTop || rect.bottom >= maxHeight + startToTop);
    }
    return result;
  }

  public scroll(el: HTMLElement): void {
    const pixel = -150;
    const element = el.getBoundingClientRect().top + window.scrollY + pixel;
    window.scrollTo({ top: element, behavior: 'smooth' });
  }
}
