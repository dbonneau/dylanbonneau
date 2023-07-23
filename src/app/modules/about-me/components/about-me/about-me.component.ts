import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public ROUTING = ROUTING;
  constructor(private readonly router: Router) {}

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
