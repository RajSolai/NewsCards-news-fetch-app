import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiantechPage } from './indiantech.page';

const routes: Routes = [
  {
    path: '',
    component: IndiantechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiantechPageRoutingModule {}
