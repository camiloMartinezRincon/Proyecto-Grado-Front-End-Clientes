import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCotizacionesPageRoutingModule } from './mis-cotizaciones-routing.module';

import { MisCotizacionesPage } from './mis-cotizaciones.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCotizacionesPageRoutingModule,
    PipesModule
  ],
  declarations: [MisCotizacionesPage]
})
export class MisCotizacionesPageModule {}
