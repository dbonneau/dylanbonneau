
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from '@app/shared/components/header/header.component';
@Component({
  selector: 'app-article-2023-07-02-01',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './article-2023-07-02-01.component.html',
  styleUrls: ['./article-2023-07-02-01.component.scss']
})
export class Article_2023_07_02_01_Component {
  @ViewChild('benefices') private benefices?: ElementRef<HTMLDivElement>;
  public beneficesIsActive = false;

  @ViewChild('organisation') private organisation?: ElementRef<HTMLDivElement>;
  public organisationIsActive = false;

  @ViewChild('places') private places?: ElementRef<HTMLDivElement>;
  public placesIsActive = false;

  @ViewChild('dress') private dress?: ElementRef<HTMLDivElement>;
  public dressIsActive = false;

  @ViewChild('workIn') private workIn?: ElementRef<HTMLDivElement>;
  public workInIsActive = false;

  @ViewChild('natural') private natural?: ElementRef<HTMLDivElement>;
  public naturalIsActive = false;

  @ViewChild('memories') private memories?: ElementRef<HTMLDivElement>;
  public memoriesIsActive = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  public conclusionIsActive = false;

  @HostListener('window:scroll', ['$event']) public isScrolledStyle(): void {
    this.beneficesIsActive = this.isScrolledIntoView(this.benefices);
    this.organisationIsActive = this.isScrolledIntoView(this.organisation);
    this.placesIsActive = this.isScrolledIntoView(this.places);
    this.dressIsActive = this.isScrolledIntoView(this.dress);
    this.workInIsActive = this.isScrolledIntoView(this.workIn);
    this.naturalIsActive = this.isScrolledIntoView(this.natural);
    this.memoriesIsActive = this.isScrolledIntoView(this.memories);
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
