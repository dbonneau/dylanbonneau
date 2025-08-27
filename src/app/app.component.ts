import { Component, ElementRef, inject, OnInit, signal, DOCUMENT } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { SEOService } from './core/services/seo.service';
import { FooterComponent } from './modules/web/footer/footer.component';
import { HeaderComponent } from './modules/web/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public loading = signal<boolean>(false);

  protected readonly router = inject(Router);
  protected readonly document = inject(DOCUMENT);
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected readonly seoService = inject(SEOService);
  protected readonly elementRef = inject(ElementRef);

  public ngOnInit(): void {
    this.seo();
    this.load();
  }

  private seo(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd || event instanceof NavigationStart),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            // eslint-disable-next-line no-param-reassign
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        if (event['title']) {
          this.seoService.updateTitle(event['title']);
          // Updating Description tag dynamically with title
          this.seoService.updateDescription(`${event['title']} : ${event['description']}`);
          this.seoService.createLinkForCanonicalURL(event['canonical']);
        }
      });
  }

  private load(): void {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading.set(true);
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading.set(false);
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
