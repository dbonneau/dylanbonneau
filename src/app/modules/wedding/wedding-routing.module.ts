import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './components/wedding/wedding.component';

const routes: Routes = [
    {
        path: '',
        component: WeddingComponent,
        data: {
            title: 'Mariage - Dylan Bonneau - Photographe de mariage',
            description: 'Ce que j\'ai à vous offrir. En tant que photographe de mariage, je suis plus qu\'un professionnel. Je suis le meilleur ami des mariés. Je suis là pour aider à capturer les moments magiques et à les conserver pour les générations futures.'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeddingRoutingModule { }
