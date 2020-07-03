import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent implements OnInit {

  @Input() search: string;

  pelicula: any = {};
  generos       = '';
  productores   = '';
  loading       = false;
  regresarA     = '';

  constructor(private peliculasService: PeliculasService,
              private activatedRoute: ActivatedRoute) {

              }

  ngOnInit(): void {

    this.loading = true;

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.regresarA = this.activatedRoute.snapshot.paramMap.get('pag');

    this.cargarPelicula(id);

  }

  cargarPelicula(id: string) {

    this.peliculasService.buscarPeliculaPorID(id)
                         .subscribe(data => {
                           this.pelicula = data;
                           this.obtenerGeneros(this.pelicula.genres);
                           this.obtenerProductores(this.pelicula.production_companies);
                           this.loading = false;
                           console.log(this.pelicula);
                         });

  }

  obtenerGeneros(generosArreglo: any[]) {

    this.generos = '';

    generosArreglo.forEach(element => {
      this.generos += ', ' + element.name;
    });

    this.generos = this.generos.substr(2);

  }

  obtenerProductores(productoresArreglo: any[]) {

    this.productores = '';

    productoresArreglo.forEach(element => {
      this.productores += ', ' + element.name;
    });

    this.productores = this.productores.substr(2);

  }

}
