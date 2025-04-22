import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MujeresComponent } from './colecciones/mujeres/mujeres.component';
import { HombresComponent } from './colecciones/hombres/hombres.component';
import { KidsComponent } from './colecciones/kids/kids.component';
import { AccesoriosComponent } from './colecciones/accesorios/accesorios.component';
import { NgModule } from '@angular/core';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReporteTemporadaComponent } from './reporte-temporada/reporte-temporada.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, 
    { path: 'mujeres', component: MujeresComponent },
    { path: 'hombres', component: HombresComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'accesorios', component: AccesoriosComponent },
    { path: 'carrito',loadComponent: () => import('./carrito/carrito.component').then(m => m.CarritoComponent)},
    { path: 'checkout', component: CheckoutComponent },
    { path: 'confirmacion', loadComponent: () => import('./confirmacion/confirmacion.component').then(m => m.ConfirmacionComponent)},
    { path: 'reporte-temporada/:temporada', component: ReporteTemporadaComponent },
    { path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
