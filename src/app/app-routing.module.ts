import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommonComponent } from './common/common.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  //------lazy laoding
  { path: 'emp1', loadChildren: () => import('./lazyemployee/lazyemployee.module').then(m => m.LazyemployeeModule) },
  //----service examples
  { path: 'comp1', component: Component1Component },
  { path: 'comp2', component: Component2Component },
  // common component
  { path: 'common', component: CommonComponent },
  //url parameter pass, student component
  { path: 'student/:id/:name', component: StudentComponent },
  // quary param and fragment
  { path: 'edit-student/:id/edit', component: EditStudentComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
