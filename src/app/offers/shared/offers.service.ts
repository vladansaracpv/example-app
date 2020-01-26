import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Offer } from './offer.model';

interface Offers {
  offers: Offer[];
}

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offers> {
    return this.http.get<Offers>('/offers');
  }

  getOfferSubscriptions(id: number): Observable<any> {
    return this.http.get(`/offers/${id}/subscriptions`);
  }

}
