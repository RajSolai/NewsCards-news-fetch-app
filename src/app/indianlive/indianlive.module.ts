import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndianlivePageRoutingModule } from './indianlive-routing.module';

import { IndianlivePage } from './indianlive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndianlivePageRoutingModule
  ],
  declarations: [IndianlivePage]
})
export class IndianlivePageModule {}
