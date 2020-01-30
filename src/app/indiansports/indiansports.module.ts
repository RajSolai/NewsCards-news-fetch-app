import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiansportsPageRoutingModule } from './indiansports-routing.module';

import { IndiansportsPage } from './indiansports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiansportsPageRoutingModule
  ],
  declarations: [IndiansportsPage]
})
export class IndiansportsPageModule {}
