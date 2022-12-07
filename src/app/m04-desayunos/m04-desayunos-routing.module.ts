import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M04DesayunosPage } from './m04-desayunos.page';

const routes: Routes = [
  {
    path: '',
    component: M04DesayunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M04DesayunosPageRoutingModule {}
