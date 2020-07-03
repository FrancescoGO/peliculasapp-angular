import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descripcioncorta'
})
export class DescripcioncortaPipe implements PipeTransform {

  transform(value: string): string {

    let titulo = '';

    (value.length >= 25)
    ? titulo = `${value.substring(0, 25)} ...`
    : titulo = value;

    return titulo;

  }

}
