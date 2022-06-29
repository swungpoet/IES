import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./acceso/login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", loadChildren: () => import('./main/home/home.module').then(x => x.HomeModule) },
  { path: "conversion", loadChildren: () => import('./main/conversion/conversion.module').then(x => x.ConversionModule) },
  { path: "fecha", loadChildren: () => import('./main/fecha/fecha.module').then(x => x.FechaModule)  },
  { path: "formulario", loadChildren: () => import('./main/formulario/formulario.module').then(x => x.FormularioModule) },
  { path: "", 
    redirectTo:"", 
    pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
