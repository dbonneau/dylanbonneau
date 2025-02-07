import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { environment } from '@env/environment';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

// Import { SEOService } from './core/services/seo.service';
import { SEOService } from './core/services/seo.service';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public loading = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seoService: SEOService,
    private elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    this.addHighlight();
    this.seo();
    this.load();
  }

  private addHighlight(): void {
    if (!environment.production) {
      const script = this.document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js';
      this.elementRef.nativeElement.appendChild(script);
    }
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
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
