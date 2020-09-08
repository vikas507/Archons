import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spark720';
  btnBackVisible: boolean;

  constructor(private route: Router, private location: Location) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.btnBackVisible = false;
    this.route.navigate(['/grid']);
  }

  // backClicked() {
  //   this.location.back();
  // }
}
