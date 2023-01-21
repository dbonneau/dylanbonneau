import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
    {
        path: '',
        component: BodyComponent,
        data: {
            title: 'Dylan Bonneau - Photographe de mariage',
            description: ' Je vous accompagne dans votre histoire, pour des photos qui vous ressemblent'        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
