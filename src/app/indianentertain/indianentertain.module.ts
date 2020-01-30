import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndianentertainPageRoutingModule } from './indianentertain-routing.module';

import { IndianentertainPage } from './indianentertain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndianentertainPageRoutingModule
  ],
  declarations: [IndianentertainPage]
})
export class IndianentertainPageModule {}
