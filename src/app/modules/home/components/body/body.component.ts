import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent {

    public ROUTING = ROUTING;
    constructor(
        private readonly _router: Router
    ) { }

    navigate(url: string): void {
        this._router.navigate([url]);
    }

}
