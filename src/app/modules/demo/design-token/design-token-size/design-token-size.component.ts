import { Component } from '@angular/core';
import { TokenViewModel } from '@app/core/models';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@app/shared/components';
import { IconName, IconSize } from '@app/shared/enums';

@Component({
  selector: 'app-design-token-size',
  imports: [FormsModule, IconComponent],
  templateUrl: './design-token-size.component.html',
  styleUrl: './design-token-size.component.scss'
})
export class DesignTokenSizeComponent {
  public searchTerm = '';
  public readonly IconName = IconName;
  public readonly IconSize = IconSize;
  public copiedToken: string | null = null;

  private readonly allSizeRadius: TokenViewModel[] = [
    new TokenViewModel({ name: 'xs', cssVar: 'size-radius-xs', valueRef: '2px' }),
    new TokenViewModel({ name: 's', cssVar: 'size-radius-s', valueRef: '4px' }),
    new TokenViewModel({ name: 'm', cssVar: 'size-radius-m', valueRef: '8px' }),
    new TokenViewModel({ name: 'l', cssVar: 'size-radius-l', valueRef: '16px' })
  ];

  private readonly allSizeSpace: TokenViewModel[] = [
    new TokenViewModel({ name: '25', cssVar: 'size-space-25', valueRef: '2px' }),
    new TokenViewModel({ name: '50', cssVar: 'size-space-50', valueRef: '4px' }),
    new TokenViewModel({ name: '100', cssVar: 'size-space-100', valueRef: '8px' }),
    new TokenViewModel({ name: '150', cssVar: 'size-space-150', valueRef: '12px' }),
    new TokenViewModel({ name: '200', cssVar: 'size-space-200', valueRef: '16px' }),
    new TokenViewModel({ name: '300', cssVar: 'size-space-300', valueRef: '24px' }),
    new TokenViewModel({ name: '400', cssVar: 'size-space-400', valueRef: '32px' }),
    new TokenViewModel({ name: '500', cssVar: 'size-space-500', valueRef: '40px' }),
    new TokenViewModel({ name: '600', cssVar: 'size-space-600', valueRef: '48px' }),
    new TokenViewModel({ name: '700', cssVar: 'size-space-700', valueRef: '56px' }),
    new TokenViewModel({ name: '800', cssVar: 'size-space-800', valueRef: '64px' }),
    new TokenViewModel({ name: '900', cssVar: 'size-space-900', valueRef: '72px' }),
    new TokenViewModel({ name: '1000', cssVar: 'size-space-1000', valueRef: '80px' }),
    new TokenViewModel({ name: '1200', cssVar: 'size-space-1200', valueRef: '96px' }),
    new TokenViewModel({ name: 's', cssVar: 'size-space-s', valueRef: '4px' }),
    new TokenViewModel({ name: 'm', cssVar: 'size-space-m', valueRef: '8px' }),
    new TokenViewModel({ name: 'l', cssVar: 'size-space-l', valueRef: '16px' })
  ];

  private readonly allSizeDim: TokenViewModel[] = [
    new TokenViewModel({ name: '100', cssVar: 'size-dim-100', valueRef: '8px' }),
    new TokenViewModel({ name: '150', cssVar: 'size-dim-150', valueRef: '12px' }),
    new TokenViewModel({ name: '200', cssVar: 'size-dim-200', valueRef: '16px' }),
    new TokenViewModel({ name: '300', cssVar: 'size-dim-300', valueRef: '24px' }),
    new TokenViewModel({ name: '400', cssVar: 'size-dim-400', valueRef: '32px' }),
    new TokenViewModel({ name: '500', cssVar: 'size-dim-500', valueRef: '40px' }),
    new TokenViewModel({ name: '600', cssVar: 'size-dim-600', valueRef: '48px' }),
    new TokenViewModel({ name: '700', cssVar: 'size-dim-700', valueRef: '56px' }),
    new TokenViewModel({ name: '800', cssVar: 'size-dim-800', valueRef: '64px' }),
    new TokenViewModel({ name: '900', cssVar: 'size-dim-900', valueRef: '72px' }),
    new TokenViewModel({ name: '1000', cssVar: 'size-dim-1000', valueRef: '80px' }),
    new TokenViewModel({ name: '1100', cssVar: 'size-dim-1100', valueRef: '88px' }),
    new TokenViewModel({ name: '1200', cssVar: 'size-dim-1200', valueRef: '96px' })
  ];

  private readonly allSizeBorder: TokenViewModel[] = [
    new TokenViewModel({ name: 'xs', cssVar: 'size-border-xs', valueRef: '1px' }),
    new TokenViewModel({ name: 's', cssVar: 'size-border-s', valueRef: '2px' }),
    new TokenViewModel({ name: 'm', cssVar: 'size-border-m', valueRef: '3px' }),
    new TokenViewModel({ name: 'l', cssVar: 'size-border-l', valueRef: '4px' })
  ];

  public get sizeRadius(): TokenViewModel[] {
    return this.filterTokens(this.allSizeRadius);
  }

  public get sizeSpace(): TokenViewModel[] {
    return this.filterTokens(this.allSizeSpace);
  }

  public get sizeDim(): TokenViewModel[] {
    return this.filterTokens(this.allSizeDim);
  }

  public get sizeBorder(): TokenViewModel[] {
    return this.filterTokens(this.allSizeBorder);
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
    return this.sizeRadius.length > 0 || this.sizeSpace.length > 0 || this.sizeDim.length > 0 || this.sizeBorder.length > 0;
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
