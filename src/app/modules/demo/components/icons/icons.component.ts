
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { IconsContributeComponent } from './icons-contribute/icons-contribute.component';
import { IconsLibraryComponent } from './icons-library/icons-library.component';
import { IconsUsageComponent } from './icons-usage/icons-usage.component';

@Component({
    selector: 'app-icons',
    imports: [MatTabsModule, IconsUsageComponent, IconsLibraryComponent, IconsContributeComponent],
    templateUrl: './icons.component.html'
})
export class IconsComponent {}
