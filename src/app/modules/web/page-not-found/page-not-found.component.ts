import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ROUTING } from '../../../shared/constants/routes';
import { ButtonSize, ButtonVariant, IconName, IconPosition } from '@app/shared/enums';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterModule, ButtonComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  public readonly ROUTING = ROUTING;
  public readonly ButtonVariant = ButtonVariant;
  public readonly ButtonSize = ButtonSize;
  public readonly IconName = IconName;
  public readonly IconPosition = IconPosition;
}
