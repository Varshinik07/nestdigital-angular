import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityentry',
  templateUrl: './securityentry.component.html',
  styleUrls: ['./securityentry.component.css']
})
export class SecurityentryComponent implements OnInit {

  constructor(private myapi:ApiService) { }


name=""
doj=""
securitycode=""
username=""
password=""

readValues=()=>{
  let data={
    "name":this.name,
    "doj":this.doj,
    "securitycode":this.securitycode,
    "username":this.username,
    "password":this.password
  }
  console.log(data)
}
  ngOnInit(): void {
  }

}
