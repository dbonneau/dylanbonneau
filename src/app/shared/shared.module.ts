import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrowScrollComponent } from './components/arrow-scroll/arrow-scroll.component';
import { spinnerComponent } from './components/spinner/spinner.component';
import { InfoboxComponent } from './components/infobox/infobox.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const components = [
    HeaderComponent,
    FooterComponent,
    ArrowScrollComponent,
    spinnerComponent,
    InfoboxComponent
];

const material = [MatSnackBarModule, MatExpansionModule];

const directive = [LazyImgDirective];

@NgModule({
    declarations: [...components, ...directive],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [...components, ...material, ...directive],
    providers: [],
})
export class SharedModule { }
