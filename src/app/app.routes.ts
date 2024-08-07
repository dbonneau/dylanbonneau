import { Routes } from '@angular/router';

import { AboutMeComponent } from './modules/about-me/about-me.component';
import { Article_2022_07_30_01_Component } from './modules/articles/2022/2022-07-30-mathilde-sebastien/article-2022-07-30-01.component';
import { Article_2023_03_16_01_Component } from './modules/articles/2023/2023-03-16-comment-choisir-son-photographe-de-mariage/article-2023-03-16-01.component';
import { Article_2023_07_02_01_Component } from './modules/articles/2023/2023-07-02-day-after/article-2023-07-02-01.component';
import { Article_2023_08_29_01_Component } from './modules/articles/2023/2023-08-29-kit-de-survie/article-2023-08-29-01.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { StyleguideComponent } from './modules/demo/pages/styleguide/styleguide.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { LegalNoticeComponent } from './modules/legal-notice/legal-notice.component';
import { WeddingComponent } from './modules/wedding/wedding.component';
import { ROUTING_ABOUT, ROUTING_BLOGS, ROUTING_DEMO, ROUTING_LEGAL_NOTICE, ROUTING_WEDDING } from './shared/consts/consts';
import { ROUTES } from './shared/consts/routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Dylan Bonneau - Photographe de mariage',
      description: ' Je vous accompagne dans votre histoire, pour des photos qui vous ressemblent'
    }
  },
  {
    path: ROUTING_ABOUT,
    component: AboutMeComponent,
    data: {
      title: 'À propos - Dylan Bonneau - Photographe de mariage',
      description: "Bonjour, Je suis Dylan Bonneau. Je suis un normand qui s'est perdu en Bretagne depuis maintenant quelques années."
    }
  },
  {
    path: ROUTING_WEDDING,
    component: WeddingComponent,
    data: {
      title: 'Mariage - Dylan Bonneau - Photographe de mariage',
      description:
        "Ce que j'ai à vous offrir. En tant que photographe de mariage, je suis plus qu'un professionnel. Je suis le meilleur ami des mariés."
    }
  },
  {
    path: ROUTING_BLOGS,
    children: [
      {
        path: '',
        component: ArticlesComponent,
        data: {
          title: 'Blog Photographe de mariage - Dylan Bonneau',
          description: "Mon but aujourd'hui ? Vous aider dans le préparation de votre mariage !"
        }
      },
      {
        path: ROUTES.Article_2022_07_30_01,
        component: Article_2022_07_30_01_Component,
        data: {
          title: 'Un mariage inoubliable sous le soleil de Derval',
          description:
            "Le soleil rayonne sur Derval, c'est un jour idéal pour un mariage. Je retrouve Mathilde et sa témoin tôt le matin, et je peux déjà ressentir l'excitation et les émotions de la journée."
        }
      },
      {
        path: ROUTES.Article_2023_03_16_01,
        component: Article_2023_03_16_01_Component,
        data: {
          title: 'Comment choisir son photographe de mariage ?',
          description: "Opter pour un photographe est l'une des décisions les plus importantes que vous devrez prendre pour votre mariage."
        }
      },
      {
        path: ROUTES.Article_2023_07_02_01,
        component: Article_2023_07_02_01_Component,
        data: {
          title: "Qu'est-ce qu'une séance photo 'Day After'",
          description:
            "La séance photo 'Day After' est une opportunité extraordinaire de revivre ces instants magiques, de créer des souvenirs intimes et authentiques, et d'immortaliser votre amour à travers des clichés exceptionnels."
        }
      },
      {
        path: ROUTES.Article_2023_08_29_01,
        component: Article_2023_08_29_01_Component,
        data: {
          title: 'kit de survie : le guide pour votre mariage',
          description: 'un kit de survie pour votre mariage : une checklist complète pour vous guider tout au long du processus'
        }
      }
    ]
  },
  {
    path: ROUTING_LEGAL_NOTICE,
    component: LegalNoticeComponent,
    data: {
      title: 'Mentions légales - Dylan Bonneau - Photographe de mariage',
      description: ''
    }
  },
  {
    path: ROUTING_DEMO,
    component: StyleguideComponent,
    children: [
      {
        path: '**',
        component: StyleguideComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: '404 - Dylan Bonneau - Photographe de mariage',
      description:
        "Ah, vous n'avez pas trouvé la page que vous cherchiez ? Pas de panique, c'est peut- être parce qu'elle s'est mariée elle aussi"
    }
  }
];
