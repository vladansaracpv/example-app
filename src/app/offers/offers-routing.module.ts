import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OffersResolver } from './shared';
import { OffersComponent } from './offers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    resolve: { offers: OffersResolver },
    data: { title: 'Active packages' }
  },
  {
    path: ':id',
    component: OfferDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
