import { Offer } from './offer.model';
import { OffersService } from './offers.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class OffersResolver implements Resolve<Offer[]> {
  constructor(private router: Router, private offersService: OffersService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.offersService.getOffers().pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
