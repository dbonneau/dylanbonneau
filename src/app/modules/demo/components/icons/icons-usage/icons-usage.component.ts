import { Component, OnInit } from '@angular/core';
import { IconsComponent } from '../icons.component';

@Component({
  selector: 'app-icons-usage',
  templateUrl: './icons-usage.component.html',
  styleUrls: ['./icons-usage.component.scss']
})
export class IconsUsageComponent extends IconsComponent implements OnInit {
  public iconCheck = `<em class='icon icon-check'></em>`;
  public iconCheckPrimary = `<em class='icon icon-check colors-primary'></em>`;
  public iconCheckFontSize20 = `<em class='icon icon-check font-size-20'></em>`;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
