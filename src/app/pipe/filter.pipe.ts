import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(valueArray: string[], sName: string): any {

    if (sName === '') {
      return valueArray;
    }

    const arrayTmp = [];

    for (const value of valueArray) {
      if (value.includes(sName)) {
        arrayTmp.push(value);
      }
    }

    return arrayTmp;
  }

}
