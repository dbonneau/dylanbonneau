import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
    constructor(
        private readonly router: Router
    ) { }

    navigateToWedding(): void {
        this.router.navigate([ROUTING.Wedding]);
    }

}
