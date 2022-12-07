import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M03AlmuerzosPageRoutingModule } from './m03-almuerzos-routing.module';

import { M03AlmuerzosPage } from './m03-almuerzos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M03AlmuerzosPageRoutingModule
  ],
  declarations: [M03AlmuerzosPage]
})
export class M03AlmuerzosPageModule {}
