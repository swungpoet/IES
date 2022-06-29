import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FechaComponent } from './fecha.component';

const routes: Routes = [
  { path: "", component: FechaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FechaRoutingModule { }