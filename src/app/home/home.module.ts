import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { GridModule} from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, GridModule , BrowserModule , BrowserAnimationsModule]
})
export class HomeModule {}
