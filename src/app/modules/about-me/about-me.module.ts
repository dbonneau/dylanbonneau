import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';

@NgModule({
    declarations: [
        AboutMeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        SharedModule,
        AboutMeRoutingModule
    ]
})
export class AboutMeModule { }
