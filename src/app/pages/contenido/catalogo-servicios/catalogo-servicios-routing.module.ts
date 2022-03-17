import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoServiciosPage } from './catalogo-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoServiciosPageRoutingModule {}
