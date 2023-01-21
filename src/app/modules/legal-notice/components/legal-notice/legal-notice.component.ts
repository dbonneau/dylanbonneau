import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
    selector: 'app-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
    constructor(
        private readonly _router: Router
    ) { }

    navigateToWedding(): void {
        this._router.navigate([ROUTING.Wedding]);
    }

}
