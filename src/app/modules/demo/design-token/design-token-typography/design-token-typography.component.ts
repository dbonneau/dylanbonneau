import { Component } from '@angular/core';
import { TokenViewModel } from '@app/core/models';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@app/shared/components';
import { IconName, IconSize } from '@app/shared/enums';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-design-token-typography',
  imports: [FormsModule, IconComponent, TitleCasePipe],
  templateUrl: './design-token-typography.component.html',
  styleUrl: './design-token-typography.component.scss'
})
export class DesignTokenTypographyComponent {
  public searchTerm = '';
  public readonly IconName = IconName;
  public readonly IconSize = IconSize;
  public copiedToken: string | null = null;

  public readonly contexts = ['desktop', 'mobile'];
  public readonly elements = ['title', 'headline', 'display', 'body'];
  public readonly sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
  public readonly weights = ['light', 'regular', 'medium', 'bold'];

  public selectedContext = 'desktop';
  public selectedElement = 'all';
  public selectedSize = 'all';
  public selectedWeight = 'all';

  private readonly allTypographies: TokenViewModel[] = this.generateTypographies();

  public get filteredTypographies(): TokenViewModel[] {
    let filtered = [...this.allTypographies];

    // Filtre par contexte (toujours appliqué car on a une valeur par défaut)
    filtered = filtered.filter((typo) => typo.cssVar.includes(`-${this.selectedContext}-`));

    // Filtre par élément
    if (this.selectedElement !== 'all') {
      filtered = filtered.filter((typo) => typo.cssVar.includes(`-${this.selectedElement}-`));
    }

    // Filtre par taille
    if (this.selectedSize !== 'all') {
      filtered = filtered.filter((typo) => typo.cssVar.includes(`-${this.selectedSize}-`));
    }

    // Filtre par poids
    if (this.selectedWeight !== 'all') {
      filtered = filtered.filter((typo) => typo.cssVar.includes(`-${this.selectedWeight}`));
    }

    return this.filterTokens(filtered);
  }

  private generateTypographies(): TokenViewModel[] {
    const typographies: TokenViewModel[] = [];

    for (const context of this.contexts) {
      for (const element of this.elements) {
        for (const size of this.sizes) {
          for (const weight of this.weights) {
            const cssVar = `typography-${context}-${element}-${size}-${weight}`;
            const name = `${this.capitalizeFirst(element)} ${size.toUpperCase()} ${this.capitalizeFirst(weight)}`;
            const valueRef = this.generateValueRef(weight, size);
            typographies.push(new TokenViewModel({ name, cssVar, valueRef }));
          }
        }
      }
    }

    return typographies;
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private generateValueRef(weight: string, size: string): string {
    const weightMap: { [key: string]: string } = {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700'
    };

    const sizeMap: { [key: string]: string } = {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      m: '18px',
      l: '24px',
      xl: '32px',
      xxl: '40px'
    };

    return `oswald - ${sizeMap[size]} - ${weightMap[weight]} - normal - 130%`;
  }

  private filterTokens(tokens: TokenViewModel[]): TokenViewModel[] {
    if (!this.searchTerm) return tokens;

    const searchLower = this.searchTerm.toLowerCase();
    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(searchLower) ||
        token.cssVar.toLowerCase().includes(searchLower) ||
        token.valueRef.toLowerCase().includes(searchLower)
    );
  }

  public get hasResults(): boolean {
    return this.filteredTypographies.length > 0;
  }

  public async copyToken(token: TokenViewModel): Promise<void> {
    try {
      await navigator.clipboard.writeText(`var(--${token.cssVar})`);
      this.copiedToken = token.cssVar;

      // Réinitialiser le message après 2 secondes
      setTimeout(() => {
        this.copiedToken = null;
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  }
}
