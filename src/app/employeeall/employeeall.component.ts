import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router'

@Component({
  selector: 'app-employeeall',
  templateUrl: './employeeall.component.html',
  styleUrls: ['./employeeall.component.css']
})
export class EmployeeallComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoregister(){
    this.router.navigate(['/employeeregister']);
  }
}