import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-article-2023-08-29-01',
  templateUrl: './article-2023-08-29-01.component.html',
  styleUrls: ['./article-2023-08-29-01.component.scss'],
})
export class Article_2023_08_29_01_Component implements OnInit {
  @ViewChild('mouchoirs') private mouchoirs?: ElementRef<HTMLDivElement>;
  mouchoirsIsActive: boolean = false;

  @ViewChild('deodorant') private deodorant?: ElementRef<HTMLDivElement>;
  deodorantIsActive: boolean = false;

  @ViewChild('trousse') private trousse?: ElementRef<HTMLDivElement>;
  trousseIsActive: boolean = false;

  @ViewChild('chaussures') private chaussures?: ElementRef<HTMLDivElement>;
  chaussuresIsActive: boolean = false;

  @ViewChild('ravitaillement')
  private ravitaillement?: ElementRef<HTMLDivElement>;
  ravitaillementIsActive: boolean = false;

  @ViewChild('eventail') private eventail?: ElementRef<HTMLDivElement>;
  eventailIsActive: boolean = false;

  @ViewChild('parapluie') private parapluie?: ElementRef<HTMLDivElement>;
  parapluieIsActive: boolean = false;

  @ViewChild('prestataires') private prestataires?: ElementRef<HTMLDivElement>;
  prestatairesIsActive: boolean = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  conclusionIsActive: boolean = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledStyle() {
    this.mouchoirsIsActive = this.isScrolledIntoView(this.mouchoirs);
    this.deodorantIsActive = this.isScrolledIntoView(this.deodorant);
    this.trousseIsActive = this.isScrolledIntoView(this.trousse);
    this.chaussuresIsActive = this.isScrolledIntoView(this.chaussures);
    this.ravitaillementIsActive = this.isScrolledIntoView(this.ravitaillement);
    this.eventailIsActive = this.isScrolledIntoView(this.eventail);
    this.parapluieIsActive = this.isScrolledIntoView(this.parapluie);
    this.prestatairesIsActive = this.isScrolledIntoView(this.prestataires);
    this.conclusionIsActive = this.isScrolledIntoView(this.conclusion);
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
