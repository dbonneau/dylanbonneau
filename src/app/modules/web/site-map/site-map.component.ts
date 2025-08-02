import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonVariant, IconName, IconPosition } from '@app/shared/enums';

@Component({
  selector: 'app-site-map',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './site-map.component.html'
})
export class SiteMapComponent {
  public readonly ButtonVariant = ButtonVariant;
  public readonly ROUTING = ROUTING;
  public readonly IconName = IconName;
  public readonly IconPosition = IconPosition;
}
