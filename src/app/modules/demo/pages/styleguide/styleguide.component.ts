import { Component, OnInit, HostListener } from '@angular/core';
import { ROUTING } from '../../../../shared/consts/consts';
const SCROLL_TOP = 200;
const SCROLL_FRACTION = 7;

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  scrolled = false;
  windowSize: any;
  ROUTING = ROUTING;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowSize = event.target.innerWidth;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > SCROLL_TOP;
  }

  ngOnInit() {
    this.windowSize = window.innerWidth;
  }

  scrollToTop(): void {
    (function smoothScroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - currentScroll / SCROLL_FRACTION);
      }
    })();
  }

  thisIsPage(thisRoute: string): boolean {
    return window.location.href.includes(thisRoute);
  }

}
