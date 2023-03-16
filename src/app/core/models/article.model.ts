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
  LINK = 'link',
}

export enum articleCategorie {
  CONSEILS = 'conseils',
  MARIAGE = 'mariage',
  PLANIFICATION = 'planification',
  TENANCES = 'tendances',
  DESTINATION = 'destination',
}

export class Article {
  createdTime: string;
  fields: {
    active: boolean,
    author: {
      email: string;
      id: string;
      name: string;
    };
    categories: articleCategorie[];
    description: string;
    featureImage: string; // URL de l'image en vedette
    subtitle: string;
    title: string;
    link: string;
  };
  id: string;

  constructor(json?: Article) {
    this.createdTime = json?.createdTime ?? '';
    this.fields = {
      active: json?.fields?.active ?? false,
      author: {
        email: json?.fields?.author?.email ?? '',
        id: json?.fields?.author?.id ?? '',
        name: json?.fields?.author?.name ?? ''
      },
      categories:
        json?.fields?.categories?.map((category) => {
          return category ?? null;
        }) ?? [],
      description: json?.fields?.description ?? '',
      featureImage: json?.fields?.featureImage ?? '',
      subtitle: json?.fields?.subtitle ?? '',
      title: json?.fields?.title ?? '',
      link: json?.fields?.link ?? ''
    };
    this.id = json?.id ?? '';
  }
}
