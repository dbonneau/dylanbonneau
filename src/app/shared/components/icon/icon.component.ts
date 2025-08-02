import { Component, computed, input } from '@angular/core';
import { IconName, IconSize } from '@app/shared/enums';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  public name = input.required<IconName>();
  public size = input<IconSize>(IconSize.M);

  protected readonly classes = computed(() => ({
    icon: true,
    [`icon-${this.name()}`]: true,
    [`icon-${this.size()}`]: true
  }));
}
