import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ROUTING_ABOUT,
  ROUTING_BLOGS,
  ROUTING_DEMO,
  ROUTING_LEGAL_NOTICE,
  ROUTING_WEDDING,
} from './shared/consts/consts';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTING_DEMO,
    loadChildren: () =>
      import('./modules/demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: ROUTING_ABOUT,
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: ROUTING_WEDDING,
    loadChildren: () =>
      import('./modules/wedding/wedding.module').then((m) => m.WeddingModule),
  },
  {
    path: ROUTING_BLOGS,
    loadChildren: () =>
      import('./modules/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
  {
    path: ROUTING_LEGAL_NOTICE,
    loadChildren: () =>
      import('./modules/legal-notice/legal-notice.module').then(
        (m) => m.LegalNoticeModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
