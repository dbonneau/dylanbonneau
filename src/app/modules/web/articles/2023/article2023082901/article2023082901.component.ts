import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonSize, ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-article2023082901',
  imports: [ButtonComponent],
  templateUrl: './article2023082901.component.html',
  styleUrl: './article2023082901.component.scss'
})
export class Article2023082901Component {
  @ViewChild('sante') private sante?: ElementRef<HTMLDivElement>;
  public santeIsActive = false;

  @ViewChild('manger') private manger?: ElementRef<HTMLDivElement>;
  public mangerIsActive = false;

  @ViewChild('imprevus') private imprevus?: ElementRef<HTMLDivElement>;
  public imprevusIsActive = false;

  @ViewChild('beaute') private beaute?: ElementRef<HTMLDivElement>;
  public beauteIsActive = false;

  @ViewChild('indispensable')
  private indispensable?: ElementRef<HTMLDivElement>;
  public indispensableIsActive = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  public conclusionIsActive = false;

  @ViewChild('print') private print?: ElementRef<HTMLDivElement>;
  public printIsActive = false;

  @HostListener('window:scroll', ['$event']) public isScrolledStyle(): void {
    this.santeIsActive = this.isScrolledIntoView(this.sante);
    this.mangerIsActive = this.isScrolledIntoView(this.manger);
    this.imprevusIsActive = this.isScrolledIntoView(this.imprevus);
    this.beauteIsActive = this.isScrolledIntoView(this.beaute);
    this.indispensableIsActive = this.isScrolledIntoView(this.indispensable);
    this.conclusionIsActive = this.isScrolledIntoView(this.conclusion);
    this.printIsActive = this.isScrolledIntoView(this.print);
  }

  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;

  public readonly urlPDF = ROUTING.ARTICLE_2023_08_29_01_PDF;

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
