import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        SharedModule,
        ErrorsRoutingModule
    ]
})
export class ErrorsModule { }
