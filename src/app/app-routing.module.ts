import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes } from '@angular/router'
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';

const routes: Routes = [
  {path:'', redirectTo:'employeeregister', pathMatch:'full'}, 
  {path:'employeeregister', component:EmployeeregisterComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }