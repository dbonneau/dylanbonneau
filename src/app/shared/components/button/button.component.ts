import { Component, computed, input } from '@angular/core';
import { ButtonSize, ButtonVariant, IconName, IconPosition, IconSize } from '@app/shared/enums';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'button[app-button], a[app-button]',
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class ButtonComponent {
  public readonly variant = input<ButtonVariant>(ButtonVariant.PRIMARY);
  public readonly size = input<ButtonSize>(ButtonSize.M);
  public readonly icon = input<IconName>();
  public readonly iconPosition = input<IconPosition>(IconPosition.LEFT);
  public readonly iconOnly = input<boolean>(false);
  public readonly active = input<boolean>(false);

  public readonly IconPosition = IconPosition;

  protected readonly hostClasses = computed(() => ({
    [`button-${this.variant()}`]: true,
    [`button-${this.size()}`]: true,
    'button-icon-only': this.iconOnly(),
    active: this.active()
  }));

  protected readonly iconSize = computed(() => {
    switch (this.size()) {
      case ButtonSize.S:
      case ButtonSize.M:
        return IconSize.S;
      case ButtonSize.L:
      case ButtonSize.XL:
        return IconSize.M;
      default:
        return IconSize.M;
    }
  });
}
