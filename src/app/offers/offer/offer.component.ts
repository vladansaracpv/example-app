import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../shared';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
