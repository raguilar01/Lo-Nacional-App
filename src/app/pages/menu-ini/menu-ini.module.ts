import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuIniPageRoutingModule } from './menu-ini-routing.module';

import { MenuIniPage } from './menu-ini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuIniPageRoutingModule
  ],
  declarations: [MenuIniPage]
})
export class MenuIniPageModule {}
