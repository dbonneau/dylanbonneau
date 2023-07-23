import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const ANGULAR_MATERIAL_MODULES = [
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule
];

@NgModule({
    imports: [
        CommonModule,
        ...ANGULAR_MATERIAL_MODULES
    ],
    exports: [...ANGULAR_MATERIAL_MODULES],
    providers: []
})
export class AngularMaterialModule { }
