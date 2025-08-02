import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonVariant, IconName, IconPosition } from '@app/shared/enums';

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent, RouterLink, UpperCasePipe, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public dataNow = new Date();

  public readonly ButtonVariant = ButtonVariant;
  public readonly ROUTING = ROUTING;
  public readonly IconName = IconName;
  public readonly IconPosition = IconPosition;
}
