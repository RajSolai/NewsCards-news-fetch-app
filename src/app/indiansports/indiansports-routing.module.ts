import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiansportsPage } from './indiansports.page';

const routes: Routes = [
  {
    path: '',
    component: IndiansportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiansportsPageRoutingModule {}
