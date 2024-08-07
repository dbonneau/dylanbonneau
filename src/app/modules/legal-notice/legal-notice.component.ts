
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  constructor(private readonly router: Router) {}

  public navigateToWedding(): void {
    this.router.navigate([ROUTING.Wedding]);
  }
}
