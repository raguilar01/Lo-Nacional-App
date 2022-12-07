import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M04DesayunosPageRoutingModule } from './m04-desayunos-routing.module';

import { M04DesayunosPage } from './m04-desayunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M04DesayunosPageRoutingModule
  ],
  declarations: [M04DesayunosPage]
})
export class M04DesayunosPageModule {}
