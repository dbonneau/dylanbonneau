import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrowScrollComponent } from './components/arrow-scroll/arrow-scroll.component';

const components = [
    HeaderComponent,
    FooterComponent,
    ArrowScrollComponent
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
