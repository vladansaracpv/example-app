import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule),
  },
  {
    path: '',
    redirectTo: 'offers',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: NotFoundErrorComponent
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
})
export class AppRoutingModule { }
