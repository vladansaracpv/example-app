import { Offer } from './shared';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers: Offer[];
  title: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { offers: Offer[], title: string }) => {
        this.offers = data.offers;
        this.title = data.title;
        console.log(this.offers);
        console.log(this.title);

      }
    );
  }

}
