import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent {

  pedidoId: string = '';
  pedido: any;
  productos: any[] = [];
  total: number = 0;

  ngOnInit() {
    const data = localStorage.getItem('pedido');
    if (data) {
      const pedido = JSON.parse(data);
      this.pedidoId = Math.random().toString(36).substr(2, 9).toUpperCase();
      this.pedido = pedido;
    }
  }
}