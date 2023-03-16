import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-article-2023-03-16-01',
  templateUrl: './article-2023-03-16-01.component.html',
  styleUrls: ['./article-2023-03-16-01.component.scss'],
})
export class Article_2023_03_16_01_Component implements OnInit {
  @ViewChild('benefices') private benefices?: ElementRef<HTMLDivElement>;
  beneficesIsActive: boolean = false;

  @ViewChild('style') private style?: ElementRef<HTMLDivElement>;
  styleIsActive: boolean = false;

  @ViewChild('portfolio') private portfolio?: ElementRef<HTMLDivElement>;
  portfolioIsActive: boolean = false;

  @ViewChild('personnalite') private personnalite?: ElementRef<HTMLDivElement>;
  personnaliteIsActive: boolean = false;

  @ViewChild('budget') private budget?: ElementRef<HTMLDivElement>;
  budgetIsActive: boolean = false;

  @ViewChild('discuter') private discuter?: ElementRef<HTMLDivElement>;
  discuterIsActive: boolean = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  conclusionIsActive: boolean = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledStyle() {
    this.beneficesIsActive = this.isScrolledIntoView(this.benefices);
    this.styleIsActive = this.isScrolledIntoView(this.style);
    this.portfolioIsActive = this.isScrolledIntoView(this.portfolio);
    this.personnaliteIsActive = this.isScrolledIntoView(this.personnalite);
    this.budgetIsActive = this.isScrolledIntoView(this.budget);
    this.discuterIsActive = this.isScrolledIntoView(this.discuter);
    this.conclusionIsActive = this.isScrolledIntoView(this.conclusion);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.getWedding();
  }

  isScrolledIntoView(elementRef?: ElementRef<HTMLDivElement>): boolean {
    if (elementRef) {
      const element = elementRef.nativeElement;
      const rect = element.getBoundingClientRect();
      const maxHeight = rect.bottom - rect.top;
      const startToTop = window.innerHeight / 2;
      return (
        (rect.top < startToTop || rect.top < -maxHeight - startToTop) &&
        (rect.bottom >= startToTop || rect.bottom >= maxHeight + startToTop)
      );
    }
    return false;
  }

  getWedding() {}

  scroll(el: HTMLElement) {
    const y = el.getBoundingClientRect().top + window.pageYOffset + -150;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
