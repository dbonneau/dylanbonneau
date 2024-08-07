
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from '@app/shared/components/header/header.component';
@Component({
  selector: 'app-article-2023-08-29-01',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './article-2023-08-29-01.component.html',
  styleUrls: ['./article-2023-08-29-01.component.scss']
})
export class Article_2023_08_29_01_Component {
  @ViewChild('mouchoirs') private mouchoirs?: ElementRef<HTMLDivElement>;
  public mouchoirsIsActive = false;

  @ViewChild('deodorant') private deodorant?: ElementRef<HTMLDivElement>;
  public deodorantIsActive = false;

  @ViewChild('trousse') private trousse?: ElementRef<HTMLDivElement>;
  public trousseIsActive = false;

  @ViewChild('chaussures') private chaussures?: ElementRef<HTMLDivElement>;
  public chaussuresIsActive = false;

  @ViewChild('ravitaillement')
  private ravitaillement?: ElementRef<HTMLDivElement>;
  public ravitaillementIsActive = false;

  @ViewChild('eventail') private eventail?: ElementRef<HTMLDivElement>;
  public eventailIsActive = false;

  @ViewChild('parapluie') private parapluie?: ElementRef<HTMLDivElement>;
  public parapluieIsActive = false;

  @ViewChild('prestataires') private prestataires?: ElementRef<HTMLDivElement>;
  public prestatairesIsActive = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  public conclusionIsActive = false;

  @HostListener('window:scroll', ['$event']) public isScrolledStyle(): void {
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
