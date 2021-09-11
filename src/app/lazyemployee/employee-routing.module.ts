import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Em1Component } from './em1/em1.component';

const routes: Routes = [
     {path:'',component:Em1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
