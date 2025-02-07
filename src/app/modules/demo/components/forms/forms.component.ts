
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsLibraryComponent } from './forms-library/forms-library.component';

@Component({
    selector: 'app-forms',
    imports: [MatTabsModule, FormsLibraryComponent],
    templateUrl: './forms.component.html'
})
export class FormsComponent {}
