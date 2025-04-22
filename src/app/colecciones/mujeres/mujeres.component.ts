import { Component, Input } from '@angular/core';
import { Ropa } from '../../ropa';
import { ProductosService } from '../../productos.service';
import { CarritoService } from '../../carrito.service';

@Component({
  selector: 'app-mujeres',
  standalone: true,
  imports: [],
  templateUrl: './mujeres.component.html',
  styleUrl: './mujeres.component.css'
})
export class MujeresComponent {
  @Input() showProds:Ropa[]=[];

  seleccion:string[]=[];
  cantidad: number =0;
  producto: any;

  constructor(private productosService:ProductosService, private carritoService: CarritoService){}

  ngOnInit(){
    this.muestraMujer();
}
muestraMujer(){
  this.showProds=this.productosService.fnMujer();
}

agregarAlCarrito(producto: any) {
  this.carritoService.agregarProducto(producto);
}

// agregarAlCarrito(producto: any) {
//   const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
//   carrito.push(producto);
//   localStorage.setItem('carrito', JSON.stringify(carrito));
//   window.dispatchEvent(new Event('carritoActualizado'));
// }

}
// aumentaResta1(cantidad:number): void{
//   switch (cantidad) {     
//     case 1: 
//       if (this.cantidad > 0) {
//         this.cantidad = this.cantidad - 1;} break;
//     case 2: this.cantidad = this.cantidad + 1; break;

//   }
// }
