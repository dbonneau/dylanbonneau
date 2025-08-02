import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonSize, ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-rennes',
  imports: [ButtonComponent],
  templateUrl: './rennes.component.html',
  styleUrl: './rennes.component.scss'
})
export class RennesComponent {
  protected readonly ROUTING = ROUTING;
  protected readonly ButtonVariant = ButtonVariant;
  protected readonly ButtonSize = ButtonSize;
}
