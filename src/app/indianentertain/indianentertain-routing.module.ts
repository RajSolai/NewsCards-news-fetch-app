import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndianentertainPage } from './indianentertain.page';

const routes: Routes = [
  {
    path: '',
    component: IndianentertainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndianentertainPageRoutingModule {}
