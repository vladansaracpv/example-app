import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Offer } from '../shared';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  @Input() offer: Offer;

  constructor(private router: Router) { }

  showDetails() {
    this.router.navigateByUrl('/offers/' + this.offer.id, { state: { data: this.offer } });
  }

}
