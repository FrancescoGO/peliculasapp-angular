import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: string): string {

    if ( value === undefined || value === null || value === '') {
      return 'assets/img/noimage.png';
    }

    const urlImage = `https://image.tmdb.org/t/p/w500${value}`;

    return urlImage;

  }

}
