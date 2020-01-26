import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Offer } from './offers.model';
import { OffersService } from './offers.service';

@Injectable({ providedIn: 'root' })
export class OffersResolver implements Resolve<Offer[]> {
  constructor(private router: Router, private offersService: OffersService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.offersService.getOffers().pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
