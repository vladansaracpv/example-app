import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Offer, Offers } from './offers.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offers>('/offers').pipe(map(data => data.offers));
  }

  getOfferSubscriptions(id: number): Observable<any> {
    return this.http.get(`/offers/${id}/subscriptions`);
  }

}
