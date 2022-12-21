import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    //Anasayfa Gideceği yer Start 
    path: '',
    component: TabsPage,
    children:  [
        { 
        path: '',
        loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
         //Anasayfa Gideceği yer End 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
