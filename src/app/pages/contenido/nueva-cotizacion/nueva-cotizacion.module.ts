import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCotizacionPageRoutingModule } from './nueva-cotizacion-routing.module';

import { NuevaCotizacionPage } from './nueva-cotizacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevaCotizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevaCotizacionPage]
})
export class NuevaCotizacionPageModule {}
