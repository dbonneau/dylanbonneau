import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ROUTES } from '@app/shared/consts/routes';
@Component({
  selector: 'app-article-2023-08-29-01',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './article-2023-08-29-01.component.html',
  styleUrls: ['./article-2023-08-29-01.component.scss']
})
export class Article_2023_08_29_01_Component {
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

  public readonly urlPDF = `assets/uploads/${ROUTES.Article_2023_08_29_01_PDF}`;

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
