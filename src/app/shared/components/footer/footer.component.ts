import { PlatformLocation } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTING } from '../../consts/consts';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public ROUTING = ROUTING;
  public dataNow = new Date();

  constructor(private readonly _platformLocation: PlatformLocation) {}

  redirect(route: string): string {
    return `${(this._platformLocation as any).location.origin}${route}`;
  }
}
