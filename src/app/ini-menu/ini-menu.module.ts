import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniMenuPageRoutingModule } from './ini-menu-routing.module';

import { IniMenuPage } from './ini-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniMenuPageRoutingModule
  ],
  declarations: [IniMenuPage]
})
export class IniMenuPageModule {}
