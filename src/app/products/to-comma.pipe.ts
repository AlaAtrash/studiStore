import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toComma'
})
export class ToCommaPipe implements PipeTransform {

  
  transform(value: string): string {
    return value.replace('.', ',');
  }

}
