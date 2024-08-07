export enum articleType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  INTRO = 'intro',
  BENEFITS = 'benefits',
  TEXT = 'text',
  IMAGE = 'image',
  BUTTON = 'button',
  LINK = 'link'
}

export enum articleCategorie {
  CONSEILS = 'conseils',
  MARIAGE = 'mariage',
  PLANIFICATION = 'planification',
  TENANCES = 'tendances',
  DESTINATION = 'destination'
}

export class Article {
  public author?: {
    email: string;
    name: string;
  };
  public categories?: articleCategorie[];
  public description?: string;
  public featureImage?: string; // URL de l'image en vedette
  public subtitle?: string;
  public title?: string;
  public link?: string;

  constructor(json?: Article) {
    this.author = {
      email: json?.author?.email ?? '',
      name: json?.author?.name ?? ''
    };
    this.categories =
      json?.categories?.map((category) => {
        return category ?? null;
      }) ?? [];
    this.description = json?.description ?? '';
    this.featureImage = json?.featureImage ?? '';
    this.subtitle = json?.subtitle ?? '';
    this.title = json?.title ?? '';
    this.link = json?.link ?? '';
  }
}
