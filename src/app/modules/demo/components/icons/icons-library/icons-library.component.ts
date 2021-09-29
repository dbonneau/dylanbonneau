import { Component, OnInit } from '@angular/core';
import { IconsComponent } from '../icons.component';

@Component({
  selector: 'app-icons-library',
  templateUrl: './icons-library.component.html',
  styleUrls: ['./icons-library.component.scss']
})
export class IconsLibraryComponent extends IconsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
