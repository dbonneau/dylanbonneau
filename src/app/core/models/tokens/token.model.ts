export class TokenViewModel {
  public name: string;
  public cssVar: string;
  public valueRef: string;

  constructor(json: TokenViewModel) {
    this.name = json.name;
    this.cssVar = json?.cssVar;
    this.valueRef = json?.valueRef;
  }
}
