import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
    {
        path: '',
        component: BodyComponent,
        data: {
            title: 'Dylan Bonneau - Photographe de mariage',
            description: 'Photographe de mariage & créateur d\'histoires. Je vous conseille et vous accompagne tout au long de votre journée.'        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
