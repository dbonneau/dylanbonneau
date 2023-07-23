import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent {
  public ROUTING = ROUTING;
  constructor(private readonly router: Router) {}

  navigate(url: string): void {
    this.router.navigate([url]);
  }
}
