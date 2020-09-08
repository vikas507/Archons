import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  filteredTilesData: any;
  constructor(private route: Router) {}

  ngOnInit() {
    this.filteredTilesData = [
      {
        headerText: 'Finance Excel Import',
        content: 'Import customers report from finance and future scope',
      },
      {
        headerText: 'Data Trends',
        content: 'Product wise business & future scope + region filter',
      },
    ];
  }

  onTileClick(headertext) {
    const obj = this.filteredTilesData.find((x) =>
      x.headerText.includes(headertext)
    );
    if (obj.headerText.includes('Finance')) {
      this.route.navigate(['/grid']);
    } else {
      this.route.navigate(['/datatrends']);
    }
  }
}
