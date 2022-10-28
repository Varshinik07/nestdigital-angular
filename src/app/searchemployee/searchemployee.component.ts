import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
searchemployee=""

readValues=()=>{
  let data={
    "searchemployee":this.searchemployee
  }
  console.log(data)
  this.myapi.searchemployee(data).subscribe(
    (response)=>{
      this.data=response
    }
  )
}
data:any=[]


  ngOnInit(): void {
  }

}
