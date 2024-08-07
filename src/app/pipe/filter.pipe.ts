import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  public transform(valueArray: string[], sName: string): string[] {
    let result;
    if (sName === '') {
      result = valueArray;
    } else {
      const arrayTmp = [];

      for (const value of valueArray) {
        if (value.includes(sName)) {
          arrayTmp.push(value);
        }
      }

      result = arrayTmp;
    }
    return result;
  }
}
