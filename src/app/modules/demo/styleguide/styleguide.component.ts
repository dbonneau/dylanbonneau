import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW } from '@app/core/services/window.service';
import { ROUTING } from '@app/shared/constants/routes';
import { DesignTokenComponent } from '../design-token/design-token.component';
import { ComponentsComponent } from '../components/components.component';
import { IconName, ButtonVariant } from '@app/shared/enums';
import { ButtonComponent, IconComponent } from '@app/shared/components';

@Component({
  selector: 'app-styleguide',
  imports: [DesignTokenComponent, ComponentsComponent, ButtonComponent, RouterModule, IconComponent],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.scss'
})
export class StyleguideComponent {
  public readonly ROUTING = ROUTING;
  public readonly IconName = IconName;
  public readonly ButtonVariant = ButtonVariant;
  public isSidebarCollapsed = false;

  private readonly window = inject(WINDOW);

  // TODO: add this in baseComponent
  public thisIsPage(thisRoute: string): boolean {
    return this.window.location.href.includes(thisRoute);
  }

  public toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
