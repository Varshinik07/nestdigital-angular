import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewsecurity().subscribe(
      (data)=>{
        this.viewsecurity=data
      }
    )
     }
     deletesecurity=(id:any)=>{
      let data={
        "id":id
      }
      this.myapi.deletesecurity(data).subscribe(
        (response)=>{
          alert("deleted successfully")
        }
      )
     }
 viewsecurity:any=[]
  ngOnInit(): void {
  }

}
