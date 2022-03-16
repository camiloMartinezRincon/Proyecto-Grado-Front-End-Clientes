import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaCotizacionPage } from './nueva-cotizacion.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaCotizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaCotizacionPageRoutingModule {}
