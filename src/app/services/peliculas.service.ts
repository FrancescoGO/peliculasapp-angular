import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '2c06bdec57402b1ff1435eaf67d18639';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getCartelera(){

    const hoy = moment().format('YYYY-MM-DD');
    const haceunmes = moment().subtract(30, 'days').format('YYYY-MM-DD');

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${haceunmes}&primary_release_date.lte=${hoy}&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
                    .pipe(
                     map ((data: any) => data.results));
  }

  getPopulares(){

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
                    .pipe(
                     map ((data: any) => data.results));
  }

  getNinios(){

    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
                    .pipe(
                     map ((data: any) => data.results));
  }

  buscarPeliculaPorTexto( texto: string ){

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get(url)
                    .pipe(
                     map ((data: any) => data.results));
  }

  buscarPeliculaPorID( id: string | number ){

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;

    return this.http.get(url);
  }

}
