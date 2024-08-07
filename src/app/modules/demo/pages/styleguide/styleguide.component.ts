import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WINDOW } from '@app/core/services/window.service';

import { ROUTING } from '../../../../shared/consts/consts';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { ColorsComponent } from '../../components/colors/colors.component';
import { FormsComponent } from '../../components/forms/forms.component';
import { IconsComponent } from '../../components/icons/icons.component';
import { MenuDemoComponent } from '../../components/menu-demo/menu-demo.component';
const SCROLL_TOP = 200;

@Component({
  selector: 'app-styleguide',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MenuDemoComponent, IconsComponent, FormsComponent, ColorsComponent, ButtonsComponent],
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  public scrolled = false;
  public windowSize: any;

  public readonly ROUTING = ROUTING;
  private readonly _window = inject(WINDOW);

  @HostListener('window:resize', ['$event']) public onResize(event: any): void {
    this.windowSize = event.target.innerWidth;
  }

  @HostListener('window:scroll', []) public onScroll(): void {
    this.scrolled = (this._window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > SCROLL_TOP;
  }

  public ngOnInit(): void {
    this.windowSize = this._window.innerWidth;
  }

  public scrollToTop(): void {
    this._window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public thisIsPage(thisRoute: string): boolean {
    return this._window.location.href.includes(thisRoute);
  }
}
