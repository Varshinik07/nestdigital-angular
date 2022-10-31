import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myrouter: Router,private myapi:ApiService) { }


  adminusername = ""
  adminpass = ""


  adminLogin = () => {
    if (this.adminusername == "admin" && this.adminpass == "admin") {
      alert("SUCCESSFUL")
      this.myrouter.navigate(["/addemp"])

    } else {
      alert("INVALID")

    }

  }

  empcode = ""
  spassword = ""
  empLogin = () => {
    let data = {
      "empcode": this.empcode,
      "spassword": this.spassword

    }
    console.log(data)
    this.myapi.addemployee(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("emp_id",resp[0].empId)
          console.log(localStorage.getItem("emp_id"))
          this.myrouter.navigate(["/emppage"])
        } else {
          
        }
      }
    )
  }

  username= ""
  password = ""
  secLogin = () => {
    let data = {
      "username": this.username,
      "password": this.password

    }
    console.log(data)
    this.myapi.addsecurity(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("s_code",resp[0].sCode)
          console.log(localStorage.getItem("s_code"))
          this.myrouter.navigate(["/securitypage"])
        } else {
          
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
