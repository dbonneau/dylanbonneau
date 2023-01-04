import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: PageNotFoundComponent,
        data: {
            title: '404 - Dylan Bonneau - Photographe de mariage',
            description: 'Ah, vous n\'avez pas trouvé la page que vous cherchiez ? Pas de panique, c\'est peut- être parce qu\'elle s\'est mariée elle aussi'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule { }
