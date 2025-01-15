import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private readonly router: Router) {}

  public navigateToWedding(): void {
    this.router.navigate([ROUTING.Wedding]);
  }
}
