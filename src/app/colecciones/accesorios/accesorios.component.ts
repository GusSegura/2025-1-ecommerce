import { Component, Input } from '@angular/core';
import { Ropa } from '../../ropa';
import { ProductosService } from '../../productos.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.css'
})
export class AccesoriosComponent {
  @Input() showProds:Ropa[]=[];

  seleccion:string[]=[];
  cantidad: number =0;
producto: any;

  constructor(private productosService:ProductosService, private carritoService: CarritoService){}

  ngOnInit(){
    this.muestraAccesorios();
}
muestraAccesorios(){
  this.showProds=this.productosService.fnAccesorios();
}
agregarAlCarrito(producto: any) {
  this.carritoService.agregarProducto(producto);
}
}
