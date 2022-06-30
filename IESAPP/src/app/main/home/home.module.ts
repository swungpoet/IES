import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Rutas
import { HomeRoutingModule } from './home-routing.module';
// Componentes
import { HomeComponent } from './home.component';
import { CambioLetrasPipe } from '../../pipes/cambio-letras.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    CambioLetrasPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class HomeModule { }
