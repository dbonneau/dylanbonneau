import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from 'src/app/shared/consts/routes';
import { Article_2022_07_30_01_Component } from './components/2022/2022-07-30-mathilde-sebastien/article-2022-07-30-01.component';
import { Article_2023_03_16_01_Component } from './components/2023/2023-03-16-comment-choisir-son-photographe-de-mariage/article-2023-03-16-01.component';
import { Article_2023_07_02_01_Component } from './components/2023/2023-07-02-day-after/article-2023-07-02-01.component';
import { ArticlesComponent } from './components/articles.component';
import { Article_2023_08_29_01_Component } from './components/2023/2023-08-29-kit-de-survie/article-2023-08-29-01.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      title: 'Blog Photographe de mariage - Dylan Bonneau',
      description:
        "Mon but aujourd'hui ? Vous aider dans le préparation de votre mariage !",
    },
  },
  {
    path: ROUTES.Article_2022_07_30_01,
    component: Article_2022_07_30_01_Component,
    data: {
      title: 'Un mariage inoubliable sous le soleil de Derval',
      description:
        "Le soleil rayonne sur Derval, c'est un jour idéal pour un mariage. Je retrouve Mathilde et sa témoin tôt le matin, et je peux déjà ressentir l'excitation et les émotions de la journée.",
    },
  },
  {
    path: ROUTES.Article_2023_03_16_01,
    component: Article_2023_03_16_01_Component,
    data: {
      title: 'Comment choisir son photographe de mariage ?',
      description:
        "Opter pour un photographe est l'une des décisions les plus importantes que vous devrez prendre pour votre mariage.",
    },
  },
  {
    path: ROUTES.Article_2023_07_02_01,
    component: Article_2023_07_02_01_Component,
    data: {
      title: "Qu'est-ce qu'une séance photo 'Day After'",
      description:
        "La séance photo 'Day After' est une opportunité extraordinaire de revivre ces instants magiques, de créer des souvenirs intimes et authentiques, et d'immortaliser votre amour à travers des clichés exceptionnels.",
    },
  },
  {
    path: ROUTES.Article_2023_08_29_01,
    component: Article_2023_08_29_01_Component,
    data: {
      title: 'kit de survie : le guide pour votre mariage',
      description:
        'un kit de survie pour votre mariage : une checklist complète pour vous guider tout au long du processus',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
