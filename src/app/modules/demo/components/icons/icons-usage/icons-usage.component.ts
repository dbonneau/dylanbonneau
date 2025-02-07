
import { Component } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
    selector: 'app-icons-usage',
    imports: [HighlightModule],
    templateUrl: './icons-usage.component.html',
    styleUrls: ['./icons-usage.component.scss']
})
export class IconsUsageComponent {
  public iconCheck = `<em class='icon icon-check'></em>`;
  public iconCheckPrimary = `<em class='icon icon-check primary-color'></em>`;
  public iconCheckFontSize20 = `<em class='icon icon-check font-size-xl'></em>`;
}
