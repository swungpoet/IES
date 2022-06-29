import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Rutas
import { FormularioRoutingModule } from './formulario-routing.module';

// Componentes
import { FormularioComponent } from './formulario.component';

@NgModule({
  declarations: [
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }
