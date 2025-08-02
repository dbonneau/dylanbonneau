import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { ButtonComponent } from '@app/shared/components';
import { ButtonVariant, IconName, ButtonSize } from '@app/shared/enums';
import { ROUTING } from '@app/shared/constants/routes';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, A11yModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public currentUrl = signal<string>('');
  public isMenuOpen = signal<boolean>(false);

  public readonly ButtonVariant = ButtonVariant;
  public readonly IconName = IconName;
  public readonly ButtonSize = ButtonSize;
  public readonly ROUTING = ROUTING;

  protected readonly router = inject(Router);

  public ngOnInit(): void {
    this.currentUrl.set(this.router.url.split('#')[0] ?? '/');
    this.getCurrentUrl();
  }

  public thisIsPage(thisRoute: string): boolean {
    return (
      (thisRoute === ROUTING.HOME && this.currentUrl() === '/') ||
      (thisRoute !== ROUTING.HOME && this.currentUrl().startsWith(`/${thisRoute}`))
    );
  }

  public toggleMenu(): void {
    this.isMenuOpen.update((value) => {
      const body = document.getElementById('body')?.getBoundingClientRect()?.width ?? 0;
      const newValue = !value;
      if (newValue && body < 975) {
        document.body.setAttribute('data-scroll-locked', '');
      } else {
        document.body.removeAttribute('data-scroll-locked');
      }
      return newValue;
    });
  }

  private getCurrentUrl(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects.split('#')[0] ?? '/');
    });
  }
}
