import { articleCategorie } from '@app/shared/enums';

export class ArticleViewModel {
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

  constructor(json?: ArticleViewModel) {
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
