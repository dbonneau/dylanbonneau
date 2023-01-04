import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { SEOService } from './core/services/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'dylanbonneau';

    constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute, private readonly _seoService: SEOService) {
    }

    ngOnInit() {
        this._router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
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
                this._seoService.updateDescription(event['title'] + event['description'])
            });
    }
}
