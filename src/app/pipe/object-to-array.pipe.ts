import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = Array.from(value);
    return value;
  }

}
