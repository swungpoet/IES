import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Rutas
import { ConversionRoutingModule } from './conversion-routing.module';

// Componentes
import { ConversionComponent } from './conversion.component';

@NgModule({
  declarations: [
    ConversionComponent,
  ],
  imports: [
    CommonModule,
    ConversionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConversionModule { }
