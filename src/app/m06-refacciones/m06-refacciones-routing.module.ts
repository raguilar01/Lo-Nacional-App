import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M06RefaccionesPage } from './m06-refacciones.page';

const routes: Routes = [
  {
    path: '',
    component: M06RefaccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M06RefaccionesPageRoutingModule {}
