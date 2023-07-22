import { Component, ElementRef, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { SEOService } from './core/services/seo.service';
import { environment } from 'src/environments/environment';

declare const gtag: Function; // <------------Important: the declartion for gtag is required!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _seoService: SEOService,
    private elementRef: ElementRef
  ) {
    if (!environment.production) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src =
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js';
      this.elementRef.nativeElement.appendChild(s);
    }
  }

  ngOnInit() {
    this._router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationStart
        ),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this._seoService.updateTitle(event['title']);
        //Updating Description tag dynamically with title
        this._seoService.updateDescription(
          event['title'] + event['description']
        );
        this._seoService.createLinkForCanonicalURL(event['canonical']);
        gtag('event', 'page_view', {
          page_path: event?.urlAfterRedirects,
        });
      });

    this._router.events.subscribe((event) => {
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
