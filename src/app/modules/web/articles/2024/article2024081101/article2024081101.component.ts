import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-article2024081101',
  imports: [ButtonComponent],
  templateUrl: './article2024081101.component.html',
  styleUrl: './article2024081101.component.scss'
})
export class Article2024081101Component {
  @ViewChild('budget') private budget?: ElementRef<HTMLDivElement>;
  public budgetIsActive = false;

  @ViewChild('lieux') private lieux?: ElementRef<HTMLDivElement>;
  public lieuxIsActive = false;

  @ViewChild('date') private date?: ElementRef<HTMLDivElement>;
  public dateIsActive = false;

  @ViewChild('team') private team?: ElementRef<HTMLDivElement>;
  public teamIsActive = false;

  @ViewChild('listInvite') private listInvite?: ElementRef<HTMLDivElement>;
  public listInviteIsActive = false;

  @ViewChild('ceremonie') private ceremonie?: ElementRef<HTMLDivElement>;
  public ceremonieIsActive = false;

  @ViewChild('dress') private dress?: ElementRef<HTMLDivElement>;
  public dressIsActive = false;

  @ViewChild('organiser') private organiser?: ElementRef<HTMLDivElement>;
  public organiserIsActive = false;

  @ViewChild('conclusion') private conclusion?: ElementRef<HTMLDivElement>;
  public conclusionIsActive = false;

  @HostListener('window:scroll', ['$event']) public isScrolledStyle(): void {
    this.budgetIsActive = this.isScrolledIntoView(this.budget);
    this.lieuxIsActive = this.isScrolledIntoView(this.lieux);
    this.dateIsActive = this.isScrolledIntoView(this.date);
    this.teamIsActive = this.isScrolledIntoView(this.team);
    this.listInviteIsActive = this.isScrolledIntoView(this.listInvite);
    this.ceremonieIsActive = this.isScrolledIntoView(this.ceremonie);
    this.dressIsActive = this.isScrolledIntoView(this.dress);
    this.organiserIsActive = this.isScrolledIntoView(this.organiser);
    this.conclusionIsActive = this.isScrolledIntoView(this.conclusion);
  }

  public readonly ROUTING = ROUTING;
  public readonly ButtonVariant = ButtonVariant;

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
