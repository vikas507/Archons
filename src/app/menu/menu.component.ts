import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dialogOpened: boolean;

  constructor() {}

  ngOnInit() {
    this.dialogOpened = false;
  }

  onMenuClick() {
    this.dialogOpened = true;
  }

  close(){
    this.dialogOpened = false;
  }
}
