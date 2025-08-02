import { Component } from '@angular/core';
import { ButtonSize, ButtonVariant, IconPosition, IconName } from '@app/shared/enums';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { ButtonComponent, IconComponent } from '@app/shared/components';

@Component({
  selector: 'app-buttons',
  imports: [ButtonComponent, FormsModule, KeyValuePipe, IconComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  public readonly ButtonVariant = ButtonVariant;
  public readonly ButtonSize = ButtonSize;
  public readonly IconPosition = IconPosition;
  public readonly IconName = IconName;

  // Configuration du bouton
  public buttonText = 'Texte du bouton';
  public selectedVariant = ButtonVariant.PRIMARY;
  public selectedSize = ButtonSize.M;
  public isDisabled = false;
  public isActive = false;
  public iconName: IconName | undefined = IconName.X;
  public selectedIconPosition = IconPosition.LEFT;
  public isIconOnly = false;

  // Liste des variants pour les radio buttons
  public readonly variants = [
    { value: ButtonVariant.PRIMARY, label: 'Primary' },
    { value: ButtonVariant.PRIMARY_OUTLINE, label: 'Primary Outline' },
    { value: ButtonVariant.SECONDARY, label: 'Secondary' },
    { value: ButtonVariant.SECONDARY_OUTLINE, label: 'Secondary Outline' },
    { value: ButtonVariant.TERTIARY, label: 'Tertiary' },
    { value: ButtonVariant.TERTIARY_REVERSE, label: 'Tertiary Reverse' },
    { value: ButtonVariant.LINK, label: 'Link' },
    { value: ButtonVariant.LINK_REVERSE, label: 'Link Reverse' },
    { value: ButtonVariant.LINK_SECONDARY, label: 'Link secondary' }
  ];

  // Liste des tailles pour les radio buttons
  public readonly sizes = [
    { value: ButtonSize.S, label: 'Small' },
    { value: ButtonSize.M, label: 'Medium' },
    { value: ButtonSize.L, label: 'Large' },
    { value: ButtonSize.XL, label: 'Extra Large' }
  ];

  // Liste des positions d'icône pour les radio buttons
  public readonly iconPositions = [
    { value: IconPosition.LEFT, label: 'Gauche' },
    { value: IconPosition.RIGHT, label: 'Droite' }
  ];
}
