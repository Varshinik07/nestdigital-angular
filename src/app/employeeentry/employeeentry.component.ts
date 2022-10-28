import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeentry',
  templateUrl: './employeeentry.component.html',
  styleUrls: ['./employeeentry.component.css']
})
export class EmployeeentryComponent implements OnInit {

  constructor(private myapi:ApiService) { }

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
    console.log(data)
    this.myapi.addemployee(data).subscribe(
      (data)=>{
    
        alert ("data added successfully")
      }
      )
  }

  ngOnInit(): void {
  }

}
