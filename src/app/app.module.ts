import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { TabsModule } from 'ngx-bootstrap/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatrendsComponent } from './datatrends/datatrends.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent,
     DashboardComponent, DatatrendsComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, GridModule, BrowserAnimationsModule, ButtonsModule, DialogsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
