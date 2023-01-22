import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/shared/consts/consts';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  public ROUTING = ROUTING;

  public testimonials = [
    // {
    //   imgUrl: 'https://i.goopics.net/ghd675.jpg',
    //   authors: 'Anaïs & Jérémy',
    //   city: 'bretteville sur laize',
    //   region: 'Calvados, France',
    //   texts: [
    //     `Dylan nous a accompagnés de A à Z dans la préparation de la journée du mariage. Le jour J, il
    //     s'est
    //     montré très professionnel, sympathique et détendu afin de nous accompagner et de capter au mieux nos émotions
    //     naturelles. Il a aussi su gérer les imprévus avec brio en naviguant sur deux lieux différents au cours de la
    //     matinée.`,
    //     `Merci infiniment Dylan pour tout, les clichés sont absolument sublimes et reflètent vraiment notre
    //     personnalité, que tu as pu cerner à travers la préparation du mariage et grâce à un questionnaire que tu as
    //     élaboré.
    //     Nous avons grâce à toi de magnifiques souvenirs de notre belle journée. N'hésitez pas, il a un talent
    //     incroyable !`,
    //     `Foncez les yeux fermés. Merci, du fond du cœur !`,
    //   ],
    // },
    {
      imgUrl: 'https://i.goopics.net/nyeakr.jpg',
      algImg: 'Mathilde-Sebastien-bisous-mairie-derval-enfant-couple',
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
        `Foncez les yeux fermés. Merci, du fond du cœur !`,
      ],
    },
  ];
  constructor(private readonly _router: Router) {}

  navigate(url: string): void {
    this._router.navigate([url]);
  }
}
