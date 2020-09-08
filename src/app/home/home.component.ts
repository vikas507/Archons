import { Component, OnInit } from '@angular/core';
import { sampleSales } from './data';
import {
  GridDataResult,
  DataStateChangeEvent,
} from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  presentTab = '';
  tabs: any;
 
  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [],
    },
  };
  columnHeaders: any;

  private items: any[] = sampleSales;

  constructor() {}

  public gridData: GridDataResult = process(sampleSales, this.state);

  ngOnInit() {


    // this.tabs = ['Active', 'InActive'];
    // this.presentTab = this.tabs[0];
    // tslint:disable-next-line: max-line-length
    this.columnHeaders = [
      { field: 'UniqueID', title: 'ID', type: 'string' },
      { field: 'Customer', title: 'Customer', type: 'string' },
      { field: 'ProjectName', title: 'Project', type: 'string' },
      { field: 'ProductsPurchased', title: 'Products', type: 'string' },
      { field: 'InitialStartDate', title: 'Start Date', type: 'date' },
      {
        field: 'CusPointOfContact.Name',
        title: 'Person Of Contact',
        type: 'string',
      },
      {
        field: 'CusPointOfContact.Email',
        title: 'Contact Email',
        type: 'string',
      },
      {
        field: 'status',
        title: 'status',
        type: 'string',
      }
    ];
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleSales, this.state);
  }
}
