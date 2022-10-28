import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myRouter:Router) { }

  email=""
password=""


readValues=()=>{

 let data={
  "email":this.email,
  "password":this.password
 }
 if(this.email=="varshu@gmail.com"&& this.password=="12345"){
  this.myRouter.navigate(["/entry"])

 }
 else{
  alert("invalid")
 }
 console.log(data)

}

  ngOnInit(): void {
  }

}
