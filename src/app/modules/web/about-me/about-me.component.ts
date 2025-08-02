import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/components';
import { ROUTING } from '@app/shared/constants/routes';
import { ButtonSize, ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-about-me',
  imports: [RouterModule, ButtonComponent, NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  public readonly ROUTING = ROUTING;
  public readonly ButtonVariant = ButtonVariant;
  public readonly ButtonSize = ButtonSize;
}
