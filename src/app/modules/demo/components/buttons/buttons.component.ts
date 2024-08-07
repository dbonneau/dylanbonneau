
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ButtonsLibraryComponent } from './buttons-library/buttons-library.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [MatTabsModule, ButtonsLibraryComponent],
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}
