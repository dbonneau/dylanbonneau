import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { HighlightModule } from 'ngx-highlightjs';

import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { MenuDemoComponent } from './components/menu-demo/menu-demo.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { IconsComponent } from './components/icons/icons.component';
import { FilterPipe } from '../../pipe/filter.pipe';
import { IconsLibraryComponent } from './components/icons/icons-library/icons-library.component';
import { IconsUsageComponent } from './components/icons/icons-usage/icons-usage.component';
import { IconsContributeComponent } from './components/icons/icons-contribute/icons-contribute.component';
import { ColorsLibraryComponent } from './components/colors/colors-library/colors-library.component';
import { ButtonsLibraryComponent } from './components/buttons/buttons-library/buttons-library.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsComponent } from './components/forms/forms.component';
import { FormsLibraryComponent } from './components/forms/forms-library/forms-library.component';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
    declarations: [
        StyleguideComponent,
        MenuDemoComponent,
        ButtonsComponent,
        ColorsComponent,
        IconsComponent,
        FilterPipe,
        IconsLibraryComponent,
        IconsUsageComponent,
        IconsContributeComponent,
        ColorsLibraryComponent,
        ButtonsLibraryComponent,
        FormsComponent,
        FormsLibraryComponent
    ],
    imports: [
        CommonModule,
        HighlightModule,
        FormsModule,
        ReactiveFormsModule,
        DemoRoutingModule,
        AngularMaterialModule,
        SharedModule,
        TranslateModule
    ],
    exports: [DemoRoutingModule, MenuDemoComponent]
})
export class DemoModule {}
