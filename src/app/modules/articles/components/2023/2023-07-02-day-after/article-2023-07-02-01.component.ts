import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-article-2023-07-02-01',
  templateUrl: './article-2023-07-02-01.component.html',
  styleUrls: ['./article-2023-07-02-01.component.scss'],
})
export class Article_2023_07_02_01_Component implements OnInit {
  @ViewChild('benefices') private benefices?: ElementRef<HTMLDivElement>;
  beneficesIsActive: boolean = false;

  @ViewChild('organisation') private organisation?: ElementRef<HTMLDivElement>;
  organisationIsActive: boolean = false;

  @ViewChild('places') private places?: ElementRef<HTMLDivElement>;
  placesIsActive: boolean = false;

  @ViewChild('dress') private dress?: ElementRef<HTMLDivElement>;
  dressIsActive: boolean = false;

  @ViewChild('workIn') private workIn?: ElementRef<HTMLDivElement>;
  workInIsActive: boolean = false;

  @ViewChild('natural') private natural?: ElementRef<HTMLDivElement>;
  naturalIsActive: boolean = false;

  @ViewChild('memories') private memories?: ElementRef<HTMLDivElement>;
  memoriesIsActive: boolean = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  conclusionIsActive: boolean = false;

  @HostListener('window:scroll', ['$event'])
  isScrolledStyle() {
    this.beneficesIsActive = this.isScrolledIntoView(this.benefices);
    this.organisationIsActive = this.isScrolledIntoView(this.organisation);
    this.placesIsActive = this.isScrolledIntoView(this.places);
    this.dressIsActive = this.isScrolledIntoView(this.dress);
    this.workInIsActive = this.isScrolledIntoView(this.workIn);
    this.naturalIsActive = this.isScrolledIntoView(this.natural);
    this.memoriesIsActive = this.isScrolledIntoView(this.memories);
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
