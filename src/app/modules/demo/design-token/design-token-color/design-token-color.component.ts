import { Component } from '@angular/core';
import { TokenViewModel } from '@app/core/models';
import { ColorGridComponent } from './components/color-grid/color-grid.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@app/shared/components';
import { IconName, IconSize } from '@app/shared/enums';

@Component({
  selector: 'app-design-token-color',
  imports: [ColorGridComponent, FormsModule, IconComponent],
  templateUrl: './design-token-color.component.html',
  styleUrl: './design-token-color.component.scss'
})
export class DesignTokenColorComponent {
  public searchTerm = '';
  public readonly IconName = IconName;
  public readonly IconSize = IconSize;

  public readonly baseColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Noir', cssVar: 'color-black', valueRef: '#000' }),
    new TokenViewModel({ name: 'Blanc', cssVar: 'color-white', valueRef: '#FFF' }),
    new TokenViewModel({ name: 'Bleu Base', cssVar: 'color-blue-base', valueRef: '#0088E3' }),
    new TokenViewModel({ name: 'Rouge Base', cssVar: 'color-red-base', valueRef: '#F03A47' }),
    new TokenViewModel({ name: 'Jaune Base', cssVar: 'color-yellow-base', valueRef: '#FFA500' }),
    new TokenViewModel({ name: 'Vert Base', cssVar: 'color-green-base', valueRef: '#00CB56' })
  ];

  public readonly greyScale: TokenViewModel[] = [
    new TokenViewModel({ name: 'Gris 100', cssVar: 'color-grey-100', valueRef: '#111' }),
    new TokenViewModel({ name: 'Gris 200', cssVar: 'color-grey-200', valueRef: '#272727' }),
    new TokenViewModel({ name: 'Gris 300', cssVar: 'color-grey-300', valueRef: '#333' }),
    new TokenViewModel({ name: 'Gris 400', cssVar: 'color-grey-400', valueRef: '#4A4A4A' }),
    new TokenViewModel({ name: 'Gris 500', cssVar: 'color-grey-500', valueRef: '#555' }),
    new TokenViewModel({ name: 'Gris 600', cssVar: 'color-grey-600', valueRef: '#666' }),
    new TokenViewModel({ name: 'Gris 700', cssVar: 'color-grey-700', valueRef: '#777' }),
    new TokenViewModel({ name: 'Gris 800', cssVar: 'color-grey-800', valueRef: '#888' }),
    new TokenViewModel({ name: 'Gris 900', cssVar: 'color-grey-900', valueRef: '#999' }),
    new TokenViewModel({ name: 'Gris A100', cssVar: 'color-grey-a100', valueRef: '#AEAEAE' }),
    new TokenViewModel({ name: 'Gris A200', cssVar: 'color-grey-a200', valueRef: '#BBB' }),
    new TokenViewModel({ name: 'Gris A300', cssVar: 'color-grey-a300', valueRef: '#CCC' }),
    new TokenViewModel({ name: 'Gris A400', cssVar: 'color-grey-a400', valueRef: '#DDD' }),
    new TokenViewModel({ name: 'Gris A500', cssVar: 'color-grey-a500', valueRef: '#EEE' }),
    new TokenViewModel({ name: 'Gris A600', cssVar: 'color-grey-a600', valueRef: '#F3F3F3' }),
    new TokenViewModel({ name: 'Gris A700', cssVar: 'color-grey-a700', valueRef: '#F8F8F8' }),
    new TokenViewModel({ name: 'Gris A800', cssVar: 'color-grey-a800', valueRef: '#FAFAFA' }),
    new TokenViewModel({ name: 'Gris A900', cssVar: 'color-grey-a900', valueRef: '#FDFDFD' })
  ];

  public readonly themeColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Primary', cssVar: 'color-primary', valueRef: '#7843E6' }),
    new TokenViewModel({ name: 'Secondary', cssVar: 'color-secondary', valueRef: '#FFEFF9' }),
    new TokenViewModel({ name: 'Tertiary', cssVar: 'color-tertiary', valueRef: '#151626' }),
    new TokenViewModel({ name: 'Background', cssVar: 'color-background', valueRef: '#202234' })
  ];

  public readonly primaryVariants: TokenViewModel[] = [
    new TokenViewModel({ name: 'Primary 100', cssVar: 'color-primary-100', valueRef: '#F5F2FE' }),
    new TokenViewModel({ name: 'Primary 200', cssVar: 'color-primary-200', valueRef: '#E0D7FC' }),
    new TokenViewModel({ name: 'Primary 300', cssVar: 'color-primary-300', valueRef: '#B39AF3' }),
    new TokenViewModel({ name: 'Primary 400', cssVar: 'color-primary-400', valueRef: 'var(--color-primary)' }),
    new TokenViewModel({ name: 'Primary 500', cssVar: 'color-primary-500', valueRef: '#4A2A8C' }),
    new TokenViewModel({ name: 'Primary 600', cssVar: 'color-primary-600', valueRef: '#3A2166' }),
    new TokenViewModel({ name: 'Primary 700', cssVar: 'color-primary-700', valueRef: '#2A1847' })
  ];

  public readonly secondaryVariants: TokenViewModel[] = [
    new TokenViewModel({ name: 'Secondary 100', cssVar: 'color-secondary-100', valueRef: '#FFF9FC' }),
    new TokenViewModel({ name: 'Secondary 200', cssVar: 'color-secondary-200', valueRef: '#FFF0F7' }),
    new TokenViewModel({ name: 'Secondary 300', cssVar: 'color-secondary-300', valueRef: '#FFD7EB' }),
    new TokenViewModel({ name: 'Secondary 400', cssVar: 'color-secondary-400', valueRef: 'var(--color-secondary)' }),
    new TokenViewModel({ name: 'Secondary 500', cssVar: 'color-secondary-500', valueRef: '#CCBFC6' }),
    new TokenViewModel({ name: 'Secondary 600', cssVar: 'color-secondary-600', valueRef: '#998F94' }),
    new TokenViewModel({ name: 'Secondary 700', cssVar: 'color-secondary-700', valueRef: '#665F63' })
  ];

  public readonly blueVariants: TokenViewModel[] = [
    new TokenViewModel({ name: 'Bleu 100', cssVar: 'color-blue-100', valueRef: '#F5FAFE' }),
    new TokenViewModel({ name: 'Bleu 200', cssVar: 'color-blue-200', valueRef: '#E0F1FC' }),
    new TokenViewModel({ name: 'Bleu 300', cssVar: 'color-blue-300', valueRef: '#8FCBF3' }),
    new TokenViewModel({ name: 'Bleu 400', cssVar: 'color-blue-400', valueRef: 'var(--color-blue-base)' }),
    new TokenViewModel({ name: 'Bleu 500', cssVar: 'color-blue-500', valueRef: '#004776' }),
    new TokenViewModel({ name: 'Bleu 600', cssVar: 'color-blue-600', valueRef: '#003152' }),
    new TokenViewModel({ name: 'Bleu 700', cssVar: 'color-blue-700', valueRef: '#00223A' })
  ];

  public readonly greenVariants: TokenViewModel[] = [
    new TokenViewModel({ name: 'Vert 100', cssVar: 'color-green-100', valueRef: '#F5FDF8' }),
    new TokenViewModel({ name: 'Vert 200', cssVar: 'color-green-200', valueRef: '#E0F9EB' }),
    new TokenViewModel({ name: 'Vert 300', cssVar: 'color-green-300', valueRef: '#8FE8B5' }),
    new TokenViewModel({ name: 'Vert 400', cssVar: 'color-green-400', valueRef: 'var(--color-green-base)' }),
    new TokenViewModel({ name: 'Vert 500', cssVar: 'color-green-500', valueRef: '#006A2D' }),
    new TokenViewModel({ name: 'Vert 600', cssVar: 'color-green-600', valueRef: '#00491F' }),
    new TokenViewModel({ name: 'Vert 700', cssVar: 'color-green-700', valueRef: '#003818' })
  ];

  public readonly redVariants: TokenViewModel[] = [
    new TokenViewModel({ name: 'Rouge 100', cssVar: 'color-red-100', valueRef: '#FEF7F8' }),
    new TokenViewModel({ name: 'Rouge 200', cssVar: 'color-red-200', valueRef: '#FDE7E9' }),
    new TokenViewModel({ name: 'Rouge 300', cssVar: 'color-red-300', valueRef: '#F8A8AE' }),
    new TokenViewModel({ name: 'Rouge 400', cssVar: 'color-red-400', valueRef: 'var(--color-red-base)' }),
    new TokenViewModel({ name: 'Rouge 500', cssVar: 'color-red-500', valueRef: '#7D1E25' }),
    new TokenViewModel({ name: 'Rouge 600', cssVar: 'color-red-600', valueRef: '#56151A' }),
    new TokenViewModel({ name: 'Rouge 700', cssVar: 'color-red-700', valueRef: '#3C0F12' })
  ];

  public readonly yellowVariants: TokenViewModel[] = [
    new TokenViewModel({ name: 'Jaune 100', cssVar: 'color-yellow-100', valueRef: '#FFFBF5' }),
    new TokenViewModel({ name: 'Jaune 200', cssVar: 'color-yellow-200', valueRef: '#FFF4E0' }),
    new TokenViewModel({ name: 'Jaune 300', cssVar: 'color-yellow-300', valueRef: '#FFD78F' }),
    new TokenViewModel({ name: 'Jaune 400', cssVar: 'color-yellow-400', valueRef: 'var(--color-yellow-base)' }),
    new TokenViewModel({ name: 'Jaune 500', cssVar: 'color-yellow-500', valueRef: '#855600' }),
    new TokenViewModel({ name: 'Jaune 600', cssVar: 'color-yellow-600', valueRef: '#5C3B00' }),
    new TokenViewModel({ name: 'Jaune 700', cssVar: 'color-yellow-700', valueRef: '#482E00' })
  ];

  public readonly backgroundColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Background Principal', cssVar: 'color-background-primary', valueRef: 'var(--color-background)' }),
    new TokenViewModel({ name: 'Background Secondaire', cssVar: 'color-background-secondary', valueRef: '#181925' }),
    new TokenViewModel({ name: 'Background Tertiaire', cssVar: 'color-background-tertiary', valueRef: '#131419' }),
    new TokenViewModel({ name: 'Background Quaternaire', cssVar: 'color-background-quaternary', valueRef: '#0F1012' }),
    new TokenViewModel({ name: 'Background Clair', cssVar: 'color-background-light', valueRef: 'var(--color-white)' }),
    new TokenViewModel({ name: 'Background Subtil', cssVar: 'color-background-subtle', valueRef: 'var(--color-grey-a600)' }),
    new TokenViewModel({ name: 'Background Désactivé', cssVar: 'color-background-disabled', valueRef: 'var(--color-grey-a500)' }),
    new TokenViewModel({ name: 'Background Inverse', cssVar: 'color-background-inverse', valueRef: 'var(--color-grey-100)' }),
    new TokenViewModel({ name: 'Background Overlay', cssVar: 'color-background-overlay', valueRef: 'rgb(15 16 18 / 95%)' }),
    new TokenViewModel({ name: 'Background Succès Subtil', cssVar: 'color-background-success-subtle', valueRef: 'var(--color-green-100)' }),
    new TokenViewModel({
      name: 'Background Avertissement Subtil',
      cssVar: 'color-background-warning-subtle',
      valueRef: 'var(--color-yellow-100)'
    }),
    new TokenViewModel({ name: 'Background Danger Subtil', cssVar: 'color-background-danger-subtle', valueRef: 'var(--color-red-100)' }),
    new TokenViewModel({ name: 'Background Info Subtil', cssVar: 'color-background-info-subtle', valueRef: 'var(--color-blue-100)' })
  ];

  public readonly textColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Texte Principal', cssVar: 'color-text-primary', valueRef: 'var(--color-primary)' }),
    new TokenViewModel({ name: 'Texte Secondaire', cssVar: 'color-text-secondary', valueRef: 'var(--color-grey-600)' }),
    new TokenViewModel({ name: 'Texte Tertiaire', cssVar: 'color-text-tertiary', valueRef: 'var(--color-grey-800)' }),
    new TokenViewModel({ name: 'Texte Désactivé', cssVar: 'color-text-disabled', valueRef: 'var(--color-grey-a200)' }),
    new TokenViewModel({ name: 'Texte Inverse', cssVar: 'color-text-inverse', valueRef: 'var(--color-white)' }),
    new TokenViewModel({ name: 'Texte Subtil', cssVar: 'color-text-subtle', valueRef: 'var(--color-grey-700)' }),
    new TokenViewModel({ name: 'Texte Indice', cssVar: 'color-text-hint', valueRef: 'var(--color-grey-500)' }),
    new TokenViewModel({ name: 'Texte Surbrillance', cssVar: 'color-text-highlight', valueRef: 'var(--color-primary)' }),
    new TokenViewModel({ name: 'Texte Succès', cssVar: 'color-text-success', valueRef: 'var(--color-green-600)' }),
    new TokenViewModel({ name: 'Texte Avertissement', cssVar: 'color-text-warning', valueRef: 'var(--color-yellow-600)' }),
    new TokenViewModel({ name: 'Texte Danger', cssVar: 'color-text-danger', valueRef: 'var(--color-red-600)' }),
    new TokenViewModel({ name: 'Texte Info', cssVar: 'color-text-info', valueRef: 'var(--color-blue-600)' })
  ];

  public readonly feedbackColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Succès', cssVar: 'color-success', valueRef: 'var(--color-green-base)' }),
    new TokenViewModel({ name: 'Avertissement', cssVar: 'color-warning', valueRef: 'var(--color-yellow-base)' }),
    new TokenViewModel({ name: 'Danger', cssVar: 'color-danger', valueRef: 'var(--color-red-base)' }),
    new TokenViewModel({ name: 'Information', cssVar: 'color-info', valueRef: 'var(--color-blue-base)' })
  ];

  public readonly borderColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Bordure', cssVar: 'color-border', valueRef: 'var(--color-grey-a400)' }),
    new TokenViewModel({ name: 'Bordure Claire', cssVar: 'color-border-light', valueRef: 'var(--color-grey-a500)' }),
    new TokenViewModel({ name: 'Bordure Subtile', cssVar: 'color-border-subtle', valueRef: 'var(--color-grey-a600)' }),
    new TokenViewModel({ name: 'Bordure Désactivée', cssVar: 'color-border-disabled', valueRef: 'var(--color-grey-a300)' }),
    new TokenViewModel({ name: 'Bordure Focus', cssVar: 'color-border-focus', valueRef: 'var(--color-primary)' }),
    new TokenViewModel({ name: 'Bordure Erreur', cssVar: 'color-border-error', valueRef: 'var(--color-red-400)' })
  ];

  public readonly interactionColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Bouton Principal', cssVar: 'color-button-primary', valueRef: 'var(--color-primary)' }),
    new TokenViewModel({
      name: 'Bouton Principal Hover',
      cssVar: 'color-button-primary-hover',
      valueRef: 'color-mix(in srgb, var(--color-primary) 90%, #000)'
    }),
    new TokenViewModel({
      name: 'Bouton Principal Actif',
      cssVar: 'color-button-primary-active',
      valueRef: 'color-mix(in srgb, var(--color-primary) 80%, #000)'
    }),
    new TokenViewModel({ name: 'Bouton Secondaire', cssVar: 'color-button-secondary', valueRef: 'var(--color-secondary)' }),
    new TokenViewModel({
      name: 'Bouton Secondaire Hover',
      cssVar: 'color-button-secondary-hover',
      valueRef: 'color-mix(in srgb, var(--color-secondary) 90%, #000)'
    }),
    new TokenViewModel({
      name: 'Bouton Secondaire Actif',
      cssVar: 'color-button-secondary-active',
      valueRef: 'color-mix(in srgb, var(--color-secondary) 80%, #000)'
    }),
    new TokenViewModel({ name: 'Lien', cssVar: 'color-link', valueRef: 'var(--color-primary)' }),
    new TokenViewModel({ name: 'Lien Hover', cssVar: 'color-link-hover', valueRef: 'color-mix(in srgb, var(--color-primary) 90%, #000)' }),
    new TokenViewModel({
      name: 'Lien Visité',
      cssVar: 'color-link-visited',
      valueRef: 'color-mix(in srgb, var(--color-primary) 70%, #800080)'
    })
  ];

  public readonly utilityColors: TokenViewModel[] = [
    new TokenViewModel({ name: 'Overlay', cssVar: 'color-overlay', valueRef: 'rgb(0 0 0 / 50%)' }),
    new TokenViewModel({ name: 'Ombre', cssVar: 'color-shadow', valueRef: 'rgb(0 0 0 / 10%)' }),
    new TokenViewModel({ name: 'Ombre Foncée', cssVar: 'color-shadow-dark', valueRef: 'rgb(0 0 0 / 20%)' }),
    new TokenViewModel({ name: 'Ombre Plus Foncée', cssVar: 'color-shadow-darker', valueRef: 'rgb(0 0 0 / 40%)' })
  ];

  public copiedColor: string | null = null;

  public async copyColorValue(color: TokenViewModel): Promise<void> {
    try {
      const valueToCopy = `var(--${color.cssVar})`;
      await navigator.clipboard.writeText(valueToCopy);
      this.copiedColor = color.cssVar;

      // Réinitialiser le message après 2 secondes
      setTimeout(() => {
        this.copiedColor = null;
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
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

  public get filteredBaseColors(): TokenViewModel[] {
    return this.filterTokens(this.baseColors);
  }

  public get filteredGreyScale(): TokenViewModel[] {
    return this.filterTokens(this.greyScale);
  }

  public get filteredPrimaryVariants(): TokenViewModel[] {
    return this.filterTokens(this.primaryVariants);
  }

  public get filteredSecondaryVariants(): TokenViewModel[] {
    return this.filterTokens(this.secondaryVariants);
  }

  public get filteredBlueVariants(): TokenViewModel[] {
    return this.filterTokens(this.blueVariants);
  }

  public get filteredGreenVariants(): TokenViewModel[] {
    return this.filterTokens(this.greenVariants);
  }

  public get filteredRedVariants(): TokenViewModel[] {
    return this.filterTokens(this.redVariants);
  }

  public get filteredYellowVariants(): TokenViewModel[] {
    return this.filterTokens(this.yellowVariants);
  }

  public get filteredThemeColors(): TokenViewModel[] {
    return this.filterTokens(this.themeColors);
  }

  public get filteredBackgroundColors(): TokenViewModel[] {
    return this.filterTokens(this.backgroundColors);
  }

  public get filteredTextColors(): TokenViewModel[] {
    return this.filterTokens(this.textColors);
  }

  public get filteredFeedbackColors(): TokenViewModel[] {
    return this.filterTokens(this.feedbackColors);
  }

  public get filteredBorderColors(): TokenViewModel[] {
    return this.filterTokens(this.borderColors);
  }

  public get filteredInteractionColors(): TokenViewModel[] {
    return this.filterTokens(this.interactionColors);
  }

  public get filteredUtilityColors(): TokenViewModel[] {
    return this.filterTokens(this.utilityColors);
  }

  public get hasResults(): boolean {
    return (
      this.filteredBaseColors.length > 0 ||
      this.filteredGreyScale.length > 0 ||
      this.filteredThemeColors.length > 0 ||
      this.filteredPrimaryVariants.length > 0 ||
      this.filteredSecondaryVariants.length > 0 ||
      this.filteredBlueVariants.length > 0 ||
      this.filteredGreenVariants.length > 0 ||
      this.filteredRedVariants.length > 0 ||
      this.filteredYellowVariants.length > 0 ||
      this.filteredBackgroundColors.length > 0 ||
      this.filteredTextColors.length > 0 ||
      this.filteredFeedbackColors.length > 0 ||
      this.filteredBorderColors.length > 0 ||
      this.filteredInteractionColors.length > 0 ||
      this.filteredUtilityColors.length > 0
    );
  }
}
