import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './components/articles.component';
import { Article_2023_03_16_01_Component } from './components/2023-03-16-comment-choisir-son-photographe-de-mariage/article-2023-03-16-01.component';

const ARTICLES = [Article_2023_03_16_01_Component];

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
