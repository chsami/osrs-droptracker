import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rename'
})
export class RenamePipe implements PipeTransform {

  transform(value: string): any {
    if (value !== '') {
      if (value.includes('&#x2013;')) {
        return value.replace('&#x2013;', '-');
      } else if (value.toLowerCase().includes('rare') && value.toLowerCase().includes('very')) {
        return 'Very rare';
      } else if (value.toLowerCase().includes('rare')) {
        return 'Rare';
      } else {
        return value;
      }
    }
  }

}