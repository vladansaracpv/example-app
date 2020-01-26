import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from '../shared';


const Icons = {
  TELEVISION: 'https://mtel.me/oec/images/2019/01/04/televizija.svg',
  INTERNET: 'https://mtel.me/oec/images/2019/06/24/internet12.png',
  TELEPHONY: 'https://mtel.me/oec/images/2019/06/25/fiksna.png',
  MOBILE: 'https://mtel.me/oec/images/2019/01/04/mobilni.svg_crvena___.svg'
};

@Component({
  selector: 'app-offer-subscription',
  templateUrl: './offer-subscription.component.html',
  styleUrls: ['./offer-subscription.component.scss']
})
export class OfferSubscriptionComponent implements OnInit {
  @Input() subscription: Subscription;
  Icons = {
    TELEVISION: 'https://mtel.me/oec/images/2019/01/04/televizija.svg',
    INTERNET: 'https://mtel.me/oec/images/2019/06/24/internet12.png',
    TELEPHONY: 'https://mtel.me/oec/images/2019/06/25/fiksna.png',
    MOBILE: 'https://mtel.me/oec/images/2019/01/04/mobilni.svg_crvena___.svg'
  };
  constructor() { }

  ngOnInit() {
  }

}
