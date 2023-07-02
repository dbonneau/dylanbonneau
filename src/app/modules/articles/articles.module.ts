import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './components/articles.component';
import { Article_2022_07_30_01_Component } from './components/2022/2022-07-30-mathilde-sebastien/article-2022-07-30-01.component';
import { Article_2023_03_16_01_Component } from './components/2023/2023-03-16-comment-choisir-son-photographe-de-mariage/article-2023-03-16-01.component';
import { Article_2023_07_02_01_Component } from './components/2023/2023-07-02-day-after/article-2023-07-02-01.component';

const ARTICLES_2022 = [Article_2022_07_30_01_Component];
const ARTICLES_2023 = [Article_2023_03_16_01_Component, Article_2023_07_02_01_Component];

const ARTICLES = [...ARTICLES_2022, ...ARTICLES_2023];

@NgModule({
  declarations: [ArticlesComponent, ...ARTICLES],
  imports: [
    CommonModule,
    RouterModule,
    HighlightModule,
    ReactiveFormsModule,
    SharedModule,
    ArticlesRoutingModule,
  ],
})
export class ArticlesModule {}
