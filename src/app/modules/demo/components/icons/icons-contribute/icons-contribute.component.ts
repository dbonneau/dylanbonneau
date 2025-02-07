
import { Component } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
    selector: 'app-icons-contribute',
    imports: [HighlightModule],
    templateUrl: './icons-contribute.component.html',
    styleUrls: ['./icons-contribute.component.scss']
})
export class IconsContributeComponent {
  public newIcon = `.icon-new-icon:before {
    content: "\e123";
  }`;
}
