import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   viewemployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
   }
   addemployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployee",data)
   }
   searchemployee(data:any){
    return this.http.post("http://localhost:8080/searchemployee",data)
   }
   deleteemployee(data:any){
    return this.http.post("http://localhost:8080/deleteemployee",data)
   }
   updateemployee(data:any){
    return this.http.post("http://localhost:8080/editemployee",data)
   }
   viewsecurity=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  addsecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
   }
  deletesecurity(data:any){
    return this.http.post("http://localhost:8080/deletesecurity",data)
   }
   addleave=(data:any)=>{
    return this.http.post("http://localhost:8080/addleave",data)
   }
   viewleave=()=>{
    return this.http.get("http://localhost:8080/viewleave")
   }
}
