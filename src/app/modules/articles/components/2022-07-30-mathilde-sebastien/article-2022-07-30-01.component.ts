import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-article-2022-07-30-01',
  templateUrl: './article-2022-07-30-01.component.html',
  styleUrls: ['./article-2022-07-30-01.component.scss'],
})
export class Article_2022_07_30_01_Component implements OnInit {
  @ViewChild('preparatifs') private preparatifs?: ElementRef<HTMLDivElement>;
  preparatifsIsActive: boolean = false;

  @ViewChild('mairie') private mairie?: ElementRef<HTMLDivElement>;
  mairieIsActive: boolean = false;

  @ViewChild('eglise') private eglise?: ElementRef<HTMLDivElement>;
  egliseIsActive: boolean = false;

  @ViewChild('pause') private pause?: ElementRef<HTMLDivElement>;
  pauseIsActive: boolean = false;

  @ViewChild('soiree') private soiree?: ElementRef<HTMLDivElement>;
  soireeIsActive: boolean = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledStyle() {
    this.preparatifsIsActive = this.isScrolledIntoView(this.preparatifs);
    this.mairieIsActive = this.isScrolledIntoView(this.mairie);
    this.egliseIsActive = this.isScrolledIntoView(this.eglise);
    this.pauseIsActive = this.isScrolledIntoView(this.pause);
    this.soireeIsActive = this.isScrolledIntoView(this.soiree);
  }

  constructor() {}

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
