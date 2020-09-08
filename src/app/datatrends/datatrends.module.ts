import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTrendsRoutingModule } from './datatrends.routing.module';
import { DatatrendsComponent } from './datatrends.component';

@NgModule({
  declarations: [DatatrendsComponent],
  imports: [
    CommonModule,
    DataTrendsRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class DataTrendsModule {}
