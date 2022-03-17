import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoServiciosPageRoutingModule } from './catalogo-servicios-routing.module';

import { CatalogoServiciosPage } from './catalogo-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoServiciosPageRoutingModule
  ],
  declarations: [CatalogoServiciosPage]
})
export class CatalogoServiciosPageModule {}
