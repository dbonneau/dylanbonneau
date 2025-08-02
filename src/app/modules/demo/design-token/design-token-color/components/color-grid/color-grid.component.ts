import { Component, Input } from '@angular/core';
import { TokenViewModel } from '@app/core/models';

@Component({
  selector: 'app-color-grid',
  standalone: true,
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss']
})
export class ColorGridComponent {
  @Input({ required: true }) colors!: TokenViewModel[];

  public copiedColor: string | null = null;

  public async copyColorValue(color: TokenViewModel): Promise<void> {
    try {
      const valueToCopy = `var(--${color.cssVar})`;
      await navigator.clipboard.writeText(valueToCopy);
      this.copiedColor = color.cssVar;

      setTimeout(() => {
        this.copiedColor = null;
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  }
}
