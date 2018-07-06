/**
 * Created By : Prem Shankar
 * common class to verify the phone format
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}

