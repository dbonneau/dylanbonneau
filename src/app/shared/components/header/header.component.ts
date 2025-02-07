import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { ROUTING } from '@app/shared/consts/consts';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule, TranslateModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event']) public onWindowScroll(): void {
    const pos = this.document.documentElement.scrollTop;
    const max = 5;
    if (pos <= max) {
      this.scrolled = false;
      this.hide = false;
    } else {
      this.scrolled = true;
      const timeout = 10;
      setTimeout(() => {
        this.hide = true;
      }, timeout);
    }
  }

  @Input() public scrolledTheme: boolean;

  public scrolled = false;
  public hide = false;
  public showMenu = false;
  public height: number;

  public readonly defaultValue = 0;
  public readonly percent = 100;
  public readonly ROUTING = ROUTING;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.height = this.defaultValue;
    this.scrolledTheme = false;
  }

  public toggleMenu(): void {
    this.height = this.height ? this.defaultValue : this.percent;
  }
}
