import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        BodyComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
