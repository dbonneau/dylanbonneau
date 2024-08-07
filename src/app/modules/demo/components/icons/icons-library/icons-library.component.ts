import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '@app/pipe/filter.pipe';

@Component({
  selector: 'app-icons-library',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './icons-library.component.html',
  styleUrls: ['./icons-library.component.scss']
})
export class IconsLibraryComponent {
  public selectedIcon = '';
  public searchName = '';

  public listIcons: string[] = [
    'check',
    'more-horizontal',
    'more-vertical',
    'heart',
    'heart-solid',
    'star',
    'star-solid',
    'wallet',
    'x',
    'search',
    'image',
    'images',
    'camera',
    'price-tag',
    'price-tags',
    'credit-card',
    'location',
    'location2',
    'calendar',
    'pie-chart',
    'stats-dots',
    'stats-bars',
    'gift',
    'trash',
    'airplane',
    'menu',
    'earth',
    'google',
    'facebook',
    'instagram',
    'youtube',
    'youtube2',
    'previous',
    'next',
    'bxs-user',
    'bx-user',
    'bx-code-block',
    'bx-git-repo-forked',
    'bx-git-pull-request',
    'bx-git-merge',
    'bx-git-compare',
    'bx-git-commit',
    'bx-git-branch',
    'bx-terminal',
    'bx-code',
    'bx-code-curly',
    'bxs-data',
    'bxs-component',
    'bx-code-alt',
    'bxs-chevron-down',
    'bxs-chevron-up',
    'bxs-chevron-right',
    'bxs-chevron-left',
    'bxs-info-circle',
    'bx-info-circle',
    'bx-minus',
    'bx-plus',
    'bxs-right-arrow',
    'bxs-left-arrow',
    'bxs-up-arrow',
    'bxs-down-arrow',
    'bxs-quote-alt-right',
    'bxs-quote-alt-left'
  ];

  public resetSearch(): void {
    this.searchName = '';
  }
}
