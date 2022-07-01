import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./acceso/login/login.component";
import { CheckLoginGuard } from './utilerias/guards/check-login.guard';


const routes: Routes = [
  { path: "home", loadChildren: () => import('./main/home/home.module').then(x => x.HomeModule), canActivate:[CheckLoginGuard] },
  { path: "conversion", loadChildren: () => import('./main/conversion/conversion.module').then(x => x.ConversionModule), canActivate:[CheckLoginGuard] },
  { path: "fecha", loadChildren: () => import('./main/fecha/fecha.module').then(x => x.FechaModule), canActivate:[CheckLoginGuard]  },
  { path: "formulario", loadChildren: () => import('./main/formulario/formulario.module').then(x => x.FormularioModule), canActivate:[CheckLoginGuard] },
  { path: "login", component: LoginComponent, canActivate:[CheckLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
