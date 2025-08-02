import { LowerCasePipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { InfoboxType } from '@app/shared/enums';

@Component({
  selector: 'app-infobox',
  imports: [LowerCasePipe, NgClass],
  templateUrl: './infobox.component.html',
  styleUrl: './infobox.component.scss'
})
export class InfoboxComponent {
  public title = input.required<string>();
  public type = input<InfoboxType>(InfoboxType.INFO);
}
