import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeentry',
  templateUrl: './employeeentry.component.html',
  styleUrls: ['./employeeentry.component.css']
})
export class EmployeeentryComponent implements OnInit {

  constructor() { }

  empcode=""
  name=""
  email=""
  password=""
  doj=""
  readValues=()=>{
    let data={
       "empcode":this.empcode,
       "name":this.name,
       "email":this.email,
       "password":this.password,
       "doj":this.doj
    }
  }

  ngOnInit(): void {
  }

}
