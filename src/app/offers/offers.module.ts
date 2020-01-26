import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OfferListComponent, OfferComponent, OfferDetailComponent, OfferSubscriptionComponent } from '.';

@NgModule({
  declarations: [
    OffersComponent,
    OfferComponent,
    OfferDetailComponent,
    OfferListComponent,
    OfferSubscriptionComponent
  ],
  imports: [
    SharedModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
