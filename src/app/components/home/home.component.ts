import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  peliculasCartelera  = [];
  peliculasPopulares  = [];
  peliculasNinios     = [];

  loading = false;

  constructor(private peliculasService: PeliculasService,
              private router: Router) {

    this.loading = true;

    this.cargarPeliculas();

  }

  ngOnInit(): void {
  }

  cargarPeliculas() {

    this.peliculasService.getPopulares()
                         .subscribe(data => {
                          this.peliculasPopulares = data;
                         });

    this.peliculasService.getCartelera()
                         .subscribe(data => {
                           this.peliculasCartelera = data;
                         });

    this.peliculasService.getNinios()
                         .subscribe(data => {
                           this.peliculasNinios = data;
                           this.loading = false;
                         });

  }

  verPelicula(id: string) {

    this.router.navigate(['/pelicula', id, 'home']);

  }

}
