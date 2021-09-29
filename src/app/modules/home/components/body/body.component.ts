import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent {

    constructor(
        private readonly _router: Router
    ) { }

    goToAboutMe(): void {
        // this._router.navigate([url]);
    }

}
