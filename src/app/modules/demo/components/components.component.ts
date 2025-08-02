import { Component, inject } from '@angular/core';
import { WINDOW } from '@app/core/services/window.service';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonVariant } from '@app/shared/enums';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/components';

@Component({
  selector: 'app-components',
  imports: [ButtonsComponent, IconsComponent, ButtonComponent, RouterModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  public readonly ROUTING = ROUTING;
  public readonly ButtonVariant = ButtonVariant;

  private readonly window = inject(WINDOW);

  // TODO: add this in baseComponent
  public thisIsPage(thisRoute: string): boolean {
    return this.window.location.href.includes(thisRoute);
  }
}
