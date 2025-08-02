import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-article2023031601',
  imports: [],
  templateUrl: './article2023031601.component.html',
  styleUrl: './article2023031601.component.scss'
})
export class Article2023031601Component {
  @ViewChild('benefices') private benefices?: ElementRef<HTMLDivElement>;
  public beneficesIsActive = false;

  @ViewChild('style') private style?: ElementRef<HTMLDivElement>;
  public styleIsActive = false;

  @ViewChild('portfolio') private portfolio?: ElementRef<HTMLDivElement>;
  public portfolioIsActive = false;

  @ViewChild('personnalite') private personnalite?: ElementRef<HTMLDivElement>;
  public personnaliteIsActive = false;

  @ViewChild('budget') private budget?: ElementRef<HTMLDivElement>;
  public budgetIsActive = false;

  @ViewChild('discuter') private discuter?: ElementRef<HTMLDivElement>;
  public discuterIsActive = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  public conclusionIsActive = false;

  @HostListener('window:scroll', ['$event']) public isScrolledStyle(): void {
    this.beneficesIsActive = this.isScrolledIntoView(this.benefices);
    this.styleIsActive = this.isScrolledIntoView(this.style);
    this.portfolioIsActive = this.isScrolledIntoView(this.portfolio);
    this.personnaliteIsActive = this.isScrolledIntoView(this.personnalite);
    this.budgetIsActive = this.isScrolledIntoView(this.budget);
    this.discuterIsActive = this.isScrolledIntoView(this.discuter);
    this.conclusionIsActive = this.isScrolledIntoView(this.conclusion);
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
