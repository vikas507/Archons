import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';

import { MenuRoutingModule } from './menu.routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule
  ],
})
export class MenuModule {}
