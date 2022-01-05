import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  {path:'', redirectTo:'employeeallComponent', pathMatch:'full'}, 
  // {path:'employeeallComponent', component:EmployeeallComponent},
  // {path:'employeeregister', component:EmployeeregisterComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }