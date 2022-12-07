import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M03AlmuerzosPage } from './m03-almuerzos.page';

const routes: Routes = [
  {
    path: '',
    component: M03AlmuerzosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M03AlmuerzosPageRoutingModule {}
