import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Em1Component } from './em1/em1.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [
    Em1Component
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class LazyemployeeModule { }
