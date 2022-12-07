import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniMenuPage } from './ini-menu.page';

const routes: Routes = [
  {
    path: '',
    component: IniMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniMenuPageRoutingModule {}
