import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors-library.component.html',
  styleUrls: ['./colors-library.component.scss']
})
export class ColorsLibraryComponent implements OnInit {
  public listColorsGrey: string[] = [
    'black',
    'white',
    'grey-1',
    'grey-2',
    'grey-3',
    'grey-4',
    'grey-5',
    'grey-6',
    'grey-7',
    'grey-8',
    'grey-9',
    'grey-a',
    'grey-b',
    'grey-c',
    'grey-d',
    'grey-e',
    'grey-f'
  ];

  public listColors: string[] = ['blue', 'red', 'yellow', 'green'];

  public listColorsBlue: string[] = ['blue-700', 'blue-600', 'blue-500', 'blue-400', 'blue-300', 'blue-200', 'blue-100'];

  public listColorsGreen: string[] = ['green-100', 'green-200', 'green-300', 'green-400', 'green-500', 'green-600', 'green-700'];

  public listColorsRed: string[] = ['red-700', 'red-600', 'red-500', 'red-400', 'red-300', 'red-200', 'red-100'];

  public listColorsYellow: string[] = ['yellow-100', 'yellow-200', 'yellow-300', 'yellow-400', 'yellow-500', 'yellow-600', 'yellow-700'];

  public listColorsTheme: string[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'light'];

  public selectedColor: string;

  constructor() {
    this.selectedColor = '';
  }

  public ngOnInit(): void {
    this.changeColor(this.listColorsTheme[0]);
  }

  public changeColor(color: string): void {
    this.selectedColor = color;
  }

  public isSelectedColor(color: string): boolean {
    return this.selectedColor === color;
  }
}
