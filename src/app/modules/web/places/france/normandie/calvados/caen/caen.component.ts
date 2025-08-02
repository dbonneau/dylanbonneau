import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonSize, ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-caen',
  imports: [ButtonComponent],
  templateUrl: './caen.component.html',
  styleUrl: './caen.component.scss'
})
export class CaenComponent {
  protected readonly ROUTING = ROUTING;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;
}
