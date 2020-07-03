import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() pelicula: any;
  @Output() peliculaSeleccionada = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  verPelicula(id: string) {

    this.peliculaSeleccionada.emit(id);

  }

}
