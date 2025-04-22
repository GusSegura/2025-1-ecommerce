import { Component, Input } from '@angular/core';
import { Ropa } from '../../ropa';
import { ProductosService } from '../../productos.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  @Input() showProds:Ropa[]=[];

  seleccion:string[]=[];
  cantidad: number =0;
producto: any;

  constructor(private productosService:ProductosService, private carritoService: CarritoService){}

  ngOnInit(){
    this.muestraKids();
}
muestraKids(){
  this.showProds=this.productosService.fnKids();
}
agregarAlCarrito(producto: any) {
  this.carritoService.agregarProducto(producto);
}
}
