import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M05CenasPage } from './m05-cenas.page';

const routes: Routes = [
  {
    path: '',
    component: M05CenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M05CenasPageRoutingModule {}
