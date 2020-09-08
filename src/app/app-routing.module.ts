import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatrendsComponent } from './datatrends/datatrends.component';

const routes: Routes = [
   { path: 'grid', component: HomeComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'datatrends', component: DatatrendsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
