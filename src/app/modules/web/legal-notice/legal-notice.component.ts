import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components';
import { ButtonVariant } from '@app/shared/enums';

@Component({
  selector: 'app-legal-notice',
  imports: [ButtonComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  public readonly ButtonVariant = ButtonVariant;
}
