import { Offer } from './../shared';
import { Subscription } from './../shared/subscription.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class OfferDetailComponent implements OnInit {
  subscriptions: Subscription[];
  offer: Offer;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { subscriptions: Subscription[], title: string }) => {
        this.offer = window.history.state.data;
        if (!this.offer) {
          this.router.navigateByUrl('/offers');
        }
        this.subscriptions = data.subscriptions;
      }
    );
  }

}
