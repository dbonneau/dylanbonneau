import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  public selectedIcon: string = '';
  public searchName = '';

  listIcons: string[] = [
    'check', 'more-horizontal', 'more-vertical',
    'heart', 'heart-solid', 'star', 'star-solid', 'wallet', 'x', 'search',
    'image', 'images', 'camera', 'price-tag', 'price-tags', 'credit-card',
    'location', 'location2', 'calendar', 'pie-chart', 'stats-dots', 'stats-bars',
    'gift', 'trash', 'airplane', 'menu', 'earth', 'google',
    'facebook', 'instagram', 'youtube', 'youtube2', 'previous', 'next',
    'bxs-user', 'bx-user', 'bx-code-block', 'bx-git-repo-forked',
    'bx-git-pull-request', 'bx-git-merge', 'bx-git-compare',
    'bx-git-commit', 'bx-git-branch', 'bx-terminal', 'bx-code',
    'bx-code-curly', 'bxs-data', 'bxs-component', 'bx-code-alt',
    'bxs-chevron-down', 'bxs-chevron-up', 'bxs-chevron-right',
    'bxs-chevron-left', 'bxs-info-circle', 'bx-info-circle',
    'bx-minus', 'bx-plus', 'bxs-right-arrow', 'bxs-left-arrow',
    'bxs-up-arrow', 'bxs-down-arrow'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  resetSearch() {
    this.searchName = '';
  }

}
