import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Rutas
import { FormularioRoutingModule } from './formulario-routing.module';

// Componentes
import { FormularioComponent } from './formulario.component';


import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';

import { CatalogoServiceService } from "../../services/catalogo-service.service";


@NgModule({
  declarations: [
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    CatalogoServiceService
  ]
})
export class FormularioModule { }
