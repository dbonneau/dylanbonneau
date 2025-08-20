import { Routes } from '@angular/router';
import { PAGE, ROUTING } from '@app/shared/constants/routes';
import { StyleguideComponent } from './modules/demo/styleguide/styleguide.component';
import { HomeComponent } from './modules/web/home/home.component';
import { AboutMeComponent } from './modules/web/about-me/about-me.component';
import { WeddingComponent } from './modules/web/wedding/wedding.component';
import { ArticlesComponent } from './modules/web/articles/articles.component';
import { Article2022073001Component } from './modules/web/articles/2022/article-2022-07-30-01/article-2022-07-30-01.component';
import { Article2023031601Component } from './modules/web/articles/2023/article2023031601/article2023031601.component';
import { Article2023070201Component } from './modules/web/articles/2023/article2023070201/article2023070201.component';
import { Article2023082901Component } from './modules/web/articles/2023/article2023082901/article2023082901.component';
import { Article2024081101Component } from './modules/web/articles/2024/article2024081101/article2024081101.component';
import { LegalNoticeComponent } from './modules/web/legal-notice/legal-notice.component';
import { SiteMapComponent } from './modules/web/site-map/site-map.component';
import { CaenComponent } from './modules/web/places/france/normandie/calvados/caen/caen.component';
import { RennesComponent } from './modules/web/places/france/bretagne/Ille-et-Vilaine/rennes/rennes.component';
import { CustomerAccessComponent } from './modules/web/customer-access/customer-access.component';

export const routes: Routes = [
  {
    path: ROUTING.HOME,
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Dylan Bonneau - Photographe de mariage',
      description: 'Je vous accompagne dans votre histoire, pour des photos qui vous ressemblent'
    }
  },
  {
    path: ROUTING.ABOUT,
    component: AboutMeComponent,
    data: {
      title: 'À propos - Dylan Bonneau - Photographe de mariage',
      description: "Bonjour, Je suis Dylan Bonneau. Je suis un normand qui s'est perdu en Bretagne depuis maintenant quelques années."
    }
  },
  {
    path: ROUTING.WEDDING,
    component: WeddingComponent,
    data: {
      title: 'Mariage - Dylan Bonneau - Photographe de mariage',
      description:
        "Ce que j'ai à vous offrir. En tant que photographe de mariage, je suis plus qu'un professionnel. Je suis le meilleur ami des mariés."
    }
  },
  {
    path: ROUTING.BLOG,
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
        path: PAGE.ARTICLE_2022_07_30_01,
        component: Article2022073001Component,
        data: {
          title: 'Un mariage inoubliable sous le soleil de Derval',
          description:
            // eslint-disable-next-line max-len
            "Le soleil rayonne sur Derval, c'est un jour idéal pour un mariage. Je retrouve Mathilde et sa témoin tôt le matin, et je peux déjà ressentir l'excitation et les émotions de la journée."
        }
      },
      {
        path: PAGE.ARTICLE_2023_03_16_01,
        component: Article2023031601Component,
        data: {
          title: 'Comment choisir son photographe de mariage ?',
          description: "Opter pour un photographe est l'une des décisions les plus importantes que vous devrez prendre pour votre mariage."
        }
      },
      {
        path: PAGE.ARTICLE_2023_07_02_01,
        component: Article2023070201Component,
        data: {
          title: "Qu'est-ce qu'une séance photo 'Day After'",
          description:
            // eslint-disable-next-line max-len
            "La séance photo 'Day After' est une opportunité extraordinaire de revivre ces instants magiques, de créer des souvenirs intimes et authentiques, et d'immortaliser votre amour à travers des clichés exceptionnels."
        }
      },
      {
        path: PAGE.ARTICLE_2023_08_29_01,
        component: Article2023082901Component,
        data: {
          title: 'kit de survie mariage : 50 accessoires indispensable',
          description: 'un kit de survie pour votre mariage : une checklist complète pour vous guider tout au long du processus'
        }
      },
      {
        path: PAGE.ARTICLE_2024_08_11_01,
        component: Article2024081101Component,
        data: {
          title: 'Le Kit de Survie Ultime pour un Mariage Mémorable et Sans Stress!',
          description:
            "Ne laissez pas le stress gâcher l'expérience de votre mariage. Avec le kit de survie ultime, vous pouvez être sûr de profiter pleinement de chaque instant de cette journée spéciale. Suivez mes conseils et préparez-vous à vivre un mariage inoubliable et sans stress !"
        }
      }
    ]
  },
  {
    path: ROUTING.LEGAL_NOTICE,
    component: LegalNoticeComponent,
    data: {
      title: 'Mentions légales - Dylan Bonneau - Photographe de mariage',
      description: ''
    }
  },
  {
    path: ROUTING.SITEMAP,
    component: SiteMapComponent,
    data: {
      title: 'Plan du site - Dylan Bonneau - Photographe de mariage',
      description: ''
    }
  },
  {
    path: ROUTING.CAEN,
    component: CaenComponent,
    data: {
      title: 'Photographe mariage Caen - Dylan Bonneau',
      description:
        'Vous allez vous mariez à Caen ? Je suis photographe de mariage, discret et passionné, pour capturer chaque émotion authentique de votre mariage en Normandie'
    }
  },
  {
    path: ROUTING.RENNES,
    component: RennesComponent,
    data: {
      title: 'Photographe mariage Rennes - Dylan Bonneau',
      description:
        'Vous allez vous mariez à Rennes ? Je suis photographe de mariage, discret et passionné, pour capturer chaque émotion authentique de votre mariage en Bretagne'
    }
  },
  {
    path: ROUTING.CUSTOMER_ACCESS,
    component: CustomerAccessComponent,
    data: {
      title: 'Accès client - Dylan Bonneau - Photographe mariage',
      description:
        'Accédez à votre galerie photo mariage privée en 2 clics. Code sécurisé, téléchargement haute définition. Photographe Rennes-Caen. support client immédiat'
    }
  },
  {
    path: ROUTING.DEMO,
    component: StyleguideComponent,
    children: [
      {
        path: '**',
        component: StyleguideComponent
      }
    ]
  }
];
