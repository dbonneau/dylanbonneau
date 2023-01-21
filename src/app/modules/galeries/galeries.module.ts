import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { GaleriesComponent } from './components/galeries.component';
import { GaleriesRoutingModule } from './galeries-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
    declarations: [
        GaleriesComponent,
        GalleryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        SharedModule,
        GaleriesRoutingModule
    ]
})
export class GaleriesModule { }
