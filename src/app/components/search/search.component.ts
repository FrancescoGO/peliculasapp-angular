import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino = '';
  peliculasBuscadas  = [];
  loading = false;

  constructor(private peliculasService: PeliculasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

                const terminoParam = this.activatedRoute.snapshot.paramMap.get('termino');
                if (terminoParam) {
                  this.termino = terminoParam;
                  this.buscarPelicula();
                }

  }

  ngOnInit(): void {
  }

  buscarPelicula() {

    if ( this.termino.length === 0) {
      return;
    }

    this.loading = true;

    this.peliculasService.buscarPeliculaPorTexto(this.termino)
                         .subscribe(data => {
                          this.peliculasBuscadas = data;
                          this.loading = false;
                         });

  }

  verPelicula(id: string) {

    // (this.router.navigate(['/pelicula', id, '/buscar', termino]));
    console.log(this.router.navigate(['/pelicula', id, 'buscar/' + this.termino]));

  }

}
