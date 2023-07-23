import { Component } from '@angular/core';
import { ROUTING } from '../../consts/consts';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public ROUTING = ROUTING;
  public dataNow = new Date();
}
