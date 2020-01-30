import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndianlivePage } from './indianlive.page';

const routes: Routes = [
  {
    path: '',
    component: IndianlivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndianlivePageRoutingModule {}
