import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiantechPageRoutingModule } from './indiantech-routing.module';

import { IndiantechPage } from './indiantech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiantechPageRoutingModule
  ],
  declarations: [IndiantechPage]
})
export class IndiantechPageModule {}
