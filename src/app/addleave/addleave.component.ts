import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }

  empid=""
 name=""
  leave_requireddate=""
  leave_reason=""
  leave_duration=""
  leave_applydate=""


  addleave=()=>{
  let data={
    "empid": this.empid,
    "name":this.name,
    "leave_reqireddate":this.leave_requireddate,
    "leave_reason":this.leave_reason,
    "leave_duration":this.leave_duration,
    "leave_applydate":this.leave_applydate
  }
  console.log(data)
    this.myapi.addleave(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("emp_id",resp[0].empId)
          console.log(localStorage.getItem("emp_id"))
        } else {
          
        }
      }
    )
  }
  


  ngOnInit(): void {
  }

}