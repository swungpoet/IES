import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Rutas
import { FechaRoutingModule } from './fecha-routing.module';

// Componentes
import { FechaComponent } from './fecha.component';

@NgModule({
  declarations: [
    FechaComponent
  ],
  imports: [
    CommonModule,
    FechaRoutingModule,
    ReactiveFormsModule
  ]
})
export class FechaModule { }
