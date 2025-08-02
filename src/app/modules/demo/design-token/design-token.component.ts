import { Component, inject } from '@angular/core';
import { WINDOW } from '@app/core/services/window.service';
import { ROUTING } from '@app/shared/constants/routes';
import { DesignTokenSizeComponent } from './design-token-size/design-token-size.component';
import { DesignTokenTypographyComponent } from './design-token-typography/design-token-typography.component';
import { DesignTokenColorComponent } from './design-token-color/design-token-color.component';
import { ButtonComponent } from '@app/shared/components';
import { ButtonVariant } from '@app/shared/enums';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-design-token',
  imports: [DesignTokenSizeComponent, DesignTokenTypographyComponent, DesignTokenColorComponent, ButtonComponent, RouterModule],
  templateUrl: './design-token.component.html',
  styleUrl: './design-token.component.scss'
})
export class DesignTokenComponent {
  public readonly ROUTING = ROUTING;
  public readonly ButtonVariant = ButtonVariant;

  private readonly window = inject(WINDOW);

  // TODO: add this in baseComponent
  public thisIsPage(thisRoute: string): boolean {
    return this.window.location.href.includes(thisRoute);
  }
}
