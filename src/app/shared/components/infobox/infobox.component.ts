import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum EInfoBox {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS'
}

@Component({
  selector: 'app-infobox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent {
  @Input() public title: string;
  @Input() public type: EInfoBox;

  constructor() {
    this.title = '';
    this.type = EInfoBox.INFO;
  }
}
