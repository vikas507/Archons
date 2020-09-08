import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showDilog: boolean;

  constructor() {}

  ngOnInit() {
    this.showDilog = false;
  }

  onMenuClick() {
    alert('This is menu click');
    this.showDilog = true;
  }
}
