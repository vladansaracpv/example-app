import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { OffersService } from './offers.service';
import { Subscription } from './subscription.model';


@Injectable({ providedIn: 'root' })
export class OfferResolver implements Resolve<Subscription[]> {

  constructor(private router: Router, private service: OffersService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Subscription[]> {
    return this.service
      .getOfferSubscriptions(route.params.id)
      .pipe(
        map(v => v.subscriptions),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }

}
