import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeddingComponent } from './components/wedding/wedding.component';
import { WeddingRoutingModule } from './wedding-routing.module';

@NgModule({
    declarations: [
        WeddingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        SharedModule,
        WeddingRoutingModule
    ]
})
export class WeddingModule { }
