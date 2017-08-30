import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push( {key: key, value: value[key]} );
      }
    }
    return keys;
  }

}
