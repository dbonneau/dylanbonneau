import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() scrolledTheme: boolean;

  public scrolled: boolean = false;
  public hide: boolean = false;
  public showMenu: boolean = false;
  public height: number = 0;
  public ROUTING = ROUTING;

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

  constructor() {
    this.scrolledTheme = false;
  }

  ngOnInit() {}

  toggleMenu() {
    this.height = !this.height ? 100 : 0;
  }
}
