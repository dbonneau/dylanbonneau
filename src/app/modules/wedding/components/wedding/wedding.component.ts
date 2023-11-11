import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';
import { ROUTES } from 'src/app/shared/consts/routes';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent {
  public ROUTING = ROUTING;
  public linkDayAfter = `/blogs/${ROUTES.Article_2023_07_02_01}`;
  constructor(private readonly router: Router) {}

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
