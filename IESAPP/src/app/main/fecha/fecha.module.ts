import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Rutas
import { FechaRoutingModule } from './fecha-routing.module';

// Componentes
import { FechaComponent } from './fecha.component';

import { FormsModule } from '@angular/forms';

// Material
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';

import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    FechaComponent
  ],
  imports: [
    CommonModule,
    FechaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
})
export class FechaModule { }
