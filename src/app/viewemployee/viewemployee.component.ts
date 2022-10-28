import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewemployee().subscribe(
      (data)=>{
        this.viewEmployee=data
      }
    )
   }
viewEmployee:any=[{"id":3,"empcode":2323,"name":"varshini.K","email":"varshu@gmail.com","password":8989,"doj":"doj"},{"id":4,"empcode":51225,"name":"jessy","email":"jessy@gmail.com","password":12345,"doj":"11/05/2022"},{"id":17,"empcode":51228,"name":"Nega","email":"nega@gmail.com","password":12345,"doj":"27/06/2022 21:06:47"},{"id":8,"empcode":51226,"name":"jacky","email":"jacky@gmail.com","password":12365,"doj":"27/04/2022 15:04:20"},{"id":18,"empcode":51228,"name":"Nega","email":"nega@gmail.com","password":12345,"doj":"27/08/2022 21:08:39"}]
  ngOnInit(): void {
  }

}
