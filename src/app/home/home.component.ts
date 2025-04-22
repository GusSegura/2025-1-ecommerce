import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";
import { TemporadasComponent } from "../temporadas/temporadas.component";
import { OfertasComponent } from "../ofertas/ofertas.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent, NosotrosComponent, TemporadasComponent, OfertasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
