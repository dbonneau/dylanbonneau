import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonSize, ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-wedding',
  imports: [RouterModule, ButtonComponent],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss'
})
export class WeddingComponent {
  public readonly ROUTING = ROUTING;
  public readonly ButtonVariant = ButtonVariant;
  public readonly ButtonSize = ButtonSize;
}
