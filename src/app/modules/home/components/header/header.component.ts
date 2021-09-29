import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public scrolled: boolean = false;
  public hide: boolean = false;
  public showMenu: boolean = false;
  public height: number = 0;

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
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.height = !this.height ? 100 : 0;
  }
}
