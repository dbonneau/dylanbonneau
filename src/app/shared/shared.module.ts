import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

const components = [
    HeaderComponent
]
@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        ...components
    ],
    providers: []
})
export class SharedModule { }
