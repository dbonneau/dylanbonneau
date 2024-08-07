export class Gallery {
  public createdTime: string;
  public fields: {
    place: string;
    country: string;
    couple: string;
    weddingDate: string;
    text: string;
    card: any;
  };
  public id: string;

  constructor(json?: Gallery) {
    this.createdTime = json?.createdTime ?? '';
    this.fields = {
      place: json?.fields.place ?? '',
      country: json?.fields.country ?? '',
      couple: json?.fields.couple ?? '',
      weddingDate: json?.fields.weddingDate ?? '',
      text: json?.fields.text ?? '',
      card: json?.fields.card ?? null
    };
    this.id = json?.id ?? '';
  }
}
