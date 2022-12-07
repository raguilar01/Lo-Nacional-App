import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M06RefaccionesPageRoutingModule } from './m06-refacciones-routing.module';

import { M06RefaccionesPage } from './m06-refacciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M06RefaccionesPageRoutingModule
  ],
  declarations: [M06RefaccionesPage]
})
export class M06RefaccionesPageModule {}
