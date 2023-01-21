import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    data: {
        title: 'À propos - Dylan Bonneau - Photographe de mariage',
        description: 'Bonjour, Je suis Dylan Bonneau. Je suis un normand qui s\'est perdu en Bretagne depuis maintenant quelques années.'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule {}
