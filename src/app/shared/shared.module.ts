import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from './loader/loader.component';
import { TitleComponent } from './title/title.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [LoaderComponent, TitleComponent, NavigationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    TitleComponent,
    NavigationComponent,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
