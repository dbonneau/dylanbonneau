
import { Component } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-buttons-library',
  standalone: true,
  imports: [HighlightModule],
  templateUrl: './buttons-library.component.html',
  styleUrls: ['./buttons-library.component.scss']
})
export class ButtonsLibraryComponent {
  public code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello there!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }`;

  public loading = false;
  public timer: Observable<number>;
  public subscription: Subscription;
  public readonly TIMER = 3000;
  public linkDefault = `<a>Lien par défaut</a>`;
  public linkButton = `<a class="button">Lien avec style de bouton</a>`;
  public buttonDefault = `<button>Bouton par défaut</button>`;
  public buttonOutline = `<button class="button-outline">Bouton outline</button>`;
  public buttonDisabled = `<button disabled>Bouton désactivé</button>`;
  public buttonMedium = `<button class="is-medium">Bouton format "medium"</button>`;
  public buttonSmall = `<button class="is-small">Bouton format "small"</button>`;
  public buttonIconLeft = `<button class="left-icon">
  <em class="icon-search"></em>
  Bouton avec icône à gauche
</button>`;
  public buttonIconRight = `<button class="right-icon">
  Bouton avec icône à droite
  <em class="icon-search"></em>
</button>`;
  public buttonHoverWhite = `<button class="button-hover-white">hover white</button>`;

  constructor() {
    this.timer = new Observable();
    this.subscription = new Subscription();
  }

  public animateButton(): void {
    this.loading = true;
    this.timer = timer(this.TIMER);

    this.subscription = this.timer.subscribe(() => {
      this.loading = false;
    });
  }
}
