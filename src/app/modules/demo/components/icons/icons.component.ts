import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@app/shared/components';
import { IconName, IconSize } from '@app/shared/enums';

@Component({
  selector: 'app-icons',
  imports: [IconComponent, FormsModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  public readonly IconName = IconName;
  public readonly IconSize = IconSize;
  public readonly iconNames = Object.values(IconName);

  public searchTerm = '';
  public selectedSize: IconSize = IconSize.M;
  public copiedIcon: string | null = null;

  protected get filteredIcons(): IconName[] {
    return this.iconNames.filter((icon) => icon.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  public async copyIconName(iconName: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(iconName);
      this.copiedIcon = iconName;

      // Réinitialiser le message après 2 secondes
      setTimeout(() => {
        this.copiedIcon = null;
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  }
}
