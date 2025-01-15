import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { ROUTING } from '@app/shared/consts/consts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [trigger('fade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('0.5s ease-in-out')])])]
})
export class HomeComponent {
  public counter = 0;

  public readonly ROUTING = ROUTING;
  public readonly testimonials = [
    {
      img: {
        url: 'https://i.postimg.cc/FsfBRb42/mariage-bisous-couple-baiser-passion-embrasse-romantique-amoureux.webp',
        width: 1244,
        height: 700,
        alt: 'Mathilde-Sebastien-bisous-mairie-derval-enfant-couple'
      },
      imgMobile: {
        url: 'https://i.postimg.cc/FsfBRb42/mariage-bisous-couple-baiser-passion-embrasse-romantique-amoureux.webp',
        width: 600,
        height: 338,
        alt: 'mobile-Mathilde-Sebastien-bisous-mairie-derval-enfant-couple'
      },
      authors: 'Anaïs & Jérémy',
      city: 'bretteville sur laize',
      region: 'Calvados, France',
      texts: [
        `Nous tenons à te remercier pour ton travail exceptionnel lors de notre mariage. Les photos sont absolument magnifiques et les prises de vue à l’intérieur du domaine sont vraiment bien pensées. Lors de la mise en scène, que ce soit pour nos photos de couple ou celles avec nos filles qui rendent les photos très émouvantes, pleines d’amour et de partage pour ce moment si magique !`,
        `Ta patience et ta créativité lors de nos échanges nous ont tout de suite convenu, nous sommes ravis de t’avoir choisi.`,
        `Grâce à toi Dylan, nous avons des souvenirs inoubliables que nous chérirons pour toujours, nous n'hésiterons pas as te recommander par notre entourage qui comme nous veut s’offrir de magnifiques photos pour leurs événements.`
      ]
    },
    {
      img: {
        url: 'https://i.postimg.cc/pX76bT32/Mathilde-Sebastien-bisous-mairie-derval-enfant-couple.webp',
        width: 1244,
        height: 700,
        alt: 'Mathilde-Sebastien-bisous-mairie-derval-enfant-couple'
      },
      imgMobile: {
        url: 'https://i.postimg.cc/jjTnLHBZ/mobile-Mathilde-Sebastien-bisous-mairie-derval-enfant-couple.webp',
        width: 600,
        height: 338,
        alt: 'mobile-Mathilde-Sebastien-bisous-mairie-derval-enfant-couple'
      },
      authors: 'Mathilde & Sebastien',
      city: 'Derval',
      region: 'Loire-Atlantique, France',
      texts: [
        `Dylan nous a accompagnés de A à Z dans la préparation de la journée du mariage. Le jour J, il
      s'est
      montré très professionnel, sympathique et détendu afin de nous accompagner et de capter au mieux nos émotions
      naturelles. Il a aussi su gérer les imprévus avec brio en naviguant sur deux lieux différents au cours de la
      matinée.`,
        `Merci infiniment Dylan pour tout, les clichés sont absolument sublimes et reflètent vraiment notre
      personnalité, que tu as pu cerner à travers la préparation du mariage et grâce à un questionnaire que tu as
      élaboré.
      Nous avons grâce à toi de magnifiques souvenirs de notre belle journée. N'hésitez pas, il a un talent
      incroyable !`,
        `Foncez les yeux fermés. Merci, du fond du cœur !`
      ]
    }
  ];

  constructor(private readonly router: Router) {}

  public onNext(): void {
    if (this.counter === this.testimonials.length - 1) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }

  public onPrevious(): void {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.testimonials.length - 1;
    }
  }

  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
