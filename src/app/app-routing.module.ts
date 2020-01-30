import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'indiansports',
    loadChildren: () => import('./indiansports/indiansports.module').then( m => m.IndiansportsPageModule)
  },
  {
    path: 'indianentertain',
    loadChildren: () => import('./indianentertain/indianentertain.module').then( m => m.IndianentertainPageModule)
  },
  {
    path: 'indiantech',
    loadChildren: () => import('./indiantech/indiantech.module').then( m => m.IndiantechPageModule)
  },
  {
    path: 'indianlive',
    loadChildren: () => import('./indianlive/indianlive.module').then( m => m.IndianlivePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
