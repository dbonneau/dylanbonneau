import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from 'src/app/shared/consts/routes';
import { Article_2023_03_16_01_Component } from './components/2023-03-16-comment-choisir-son-photographe-de-mariage/article-2023-03-16-01.component';
import { ArticlesComponent } from './components/articles.component';

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
    path: ROUTES.Article_2023_03_16_01,
    component: Article_2023_03_16_01_Component,
    data: {
      title: 'Comment choisir son photographe de mariage ?',
      description:
        "Opter pour un photographe est l'une des décisions les plus importantes que vous devrez prendre pour votre mariage.",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
