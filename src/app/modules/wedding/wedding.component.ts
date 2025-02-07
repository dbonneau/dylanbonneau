import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ROUTING } from 'src/app/shared/consts/consts';
import { ROUTES } from 'src/app/shared/consts/routes';

@Component({
    selector: 'app-wedding',
    imports: [HeaderComponent, FooterComponent, MatExpansionModule],
    templateUrl: './wedding.component.html',
    styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent {
  public readonly ROUTING = ROUTING;
  public readonly linkDayAfter = `/blogs/${ROUTES.Article_2023_07_02_01}`;

  constructor(private readonly router: Router) {}

  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
