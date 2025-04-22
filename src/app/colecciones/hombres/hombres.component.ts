import { Component, Input } from '@angular/core';
import { Ropa } from '../../ropa';
import { ProductosService } from '../../productos.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-hombres',
  standalone: true,
  imports: [],
  templateUrl: './hombres.component.html',
  styleUrl: './hombres.component.css'
})
export class HombresComponent {
  @Input() showProds:Ropa[]=[];

  seleccion:string[]=[];
  cantidad: number =0;
producto: any;

  constructor(private productosService:ProductosService, private carritoService: CarritoService){}

  ngOnInit(){
    this.muestraHombre();
}
muestraHombre(){
  this.showProds=this.productosService.fnHombre();
}
agregarAlCarrito(producto: any) {
  this.carritoService.agregarProducto(producto);
}
}
