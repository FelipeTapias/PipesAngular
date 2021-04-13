import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, ocultar: boolean): string {
    return ( ocultar ) ? '*'.repeat( value.length ) : value;
  }

}
