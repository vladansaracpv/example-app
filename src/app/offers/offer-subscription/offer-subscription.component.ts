import { Component, Input } from '@angular/core';
import { Subscription } from '../shared';

@Component({
  selector: 'app-offer-subscription',
  templateUrl: './offer-subscription.component.html',
  styleUrls: ['./offer-subscription.component.scss']
})
export class OfferSubscriptionComponent {
  @Input() subscription: Subscription;
}
