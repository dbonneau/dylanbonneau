
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu-demo',
    imports: [MatMenuModule, RouterLink],
    templateUrl: './menu-demo.component.html',
    styleUrls: ['./menu-demo.component.scss']
})
export class MenuDemoComponent {}
