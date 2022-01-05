import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,EmployeeAllComponent,EmployeeEditComponent, EmployeeRegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
