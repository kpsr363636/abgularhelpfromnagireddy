import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes } from '@angular/router'
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { EmployeeallComponent } from './employeeall/employeeall.component';

const routes: Routes = [
  {path:'', redirectTo:'employeeregister', pathMatch:'full'}, 
  {path:'employeeregister', component:EmployeeregisterComponent},
  {path:'employeeallComponent', component:EmployeeallComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }