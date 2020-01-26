import { Offer } from './../shared';
import { Subscription, Subscriptions } from './../shared/subscription.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  subscriptions: Subscription[];
  offer: Offer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { subscriptions: Subscription[], title: string }) => {
        this.subscriptions = data.subscriptions;
        this.offer = window.history.state.data;
      }
    );
  }

}
