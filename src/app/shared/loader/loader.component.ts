import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from '@app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading = false;

  constructor(private loaderService: LoaderService) { }


  ngOnInit() {
    this.loaderService.isLoading.subscribe(value => {
      this.isLoading = value;
    });

  }
}
