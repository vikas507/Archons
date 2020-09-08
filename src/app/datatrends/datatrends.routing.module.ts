import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatrendsComponent } from './datatrends.component';

const routes: Routes = [
  {
    path: 'datatrends',
    component: DatatrendsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTrendsRoutingModule {}
