import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPipe'
})
export class DecimalPipePipe implements PipeTransform {

  transform(value: string, char:string): string {
    return `${value}${char}`;
  }

}
