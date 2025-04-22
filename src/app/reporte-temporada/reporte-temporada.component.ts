import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Ropa } from '../ropa';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-reporte-temporada',
  imports: [CommonModule, RouterModule],
  templateUrl: './reporte-temporada.component.html',
  styleUrl: './reporte-temporada.component.css'
})
export class ReporteTemporadaComponent {
  productosTemporada: Ropa[] = [];
  temporada: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private productosService: ProductosService, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.temporada = params.get('temporada') || '';
      const productos = this.productosService.getRopa();
      this.productosTemporada = productos.filter(p => p.temporada === this.temporada);
    });
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
navegar(temporada: string) {
  this.router.navigate(['/reporte-temporada', temporada]);
}
}