
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { ColorsLibraryComponent } from './colors-library/colors-library.component';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [MatTabsModule, ColorsLibraryComponent],
  templateUrl: './colors.component.html'
})
export class ColorsComponent {}
