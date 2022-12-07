import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M05CenasPageRoutingModule } from './m05-cenas-routing.module';

import { M05CenasPage } from './m05-cenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M05CenasPageRoutingModule
  ],
  declarations: [M05CenasPage]
})
export class M05CenasPageModule {}
