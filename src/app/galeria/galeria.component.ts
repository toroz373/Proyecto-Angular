import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  imagenes = [
    { url: 'public/Galeria/imag11', descripcion: 'Imagen 1' },
    { url: 'public/Galeria/imag12', descripcion: 'Imagen 2' },
    { url: 'public/Galeria/imag13', descripcion: 'Imagen 3' },
    { url: 'public/Galeria/imag14', descripcion: 'Imagen 4' },
    { url: 'public/Galeria/imag15', descripcion: 'Imagen 5' },
  ];
}
