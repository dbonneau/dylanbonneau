import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input() scrolledTheme: boolean;

    public scrolled: boolean = false;
    public hide: boolean = false;
    public showMenu: boolean = false;
    public height: number = 0;
    public ROUTING = ROUTING;
    public dataNow = new Date;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const pos = document.documentElement.scrollTop;
        const max = 5;
        if (pos <= max) {
            this.scrolled = false;
            this.hide = false;
        } else {
            this.scrolled = true;
            setTimeout(() => {
                this.hide = true;
            }, 10);
        }
    }

    constructor(
        private readonly _router: Router
    ) {
        this.scrolledTheme = false;
    }

    ngOnInit() {
    }

    toggleMenu() {
        this.height = !this.height ? 100 : 0;
    }

    redirect(route: string) {
        this._router.navigate([`${route}`])
    }
}
