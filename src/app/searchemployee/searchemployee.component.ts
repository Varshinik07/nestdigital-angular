import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

updateemployee=()=>{
  this.myapi.updateemployee(this.data[0]).subscribe(
    (response)=>{
      alert("updated successfully")
    }
  )
}




data:any={
 
}


  ngOnInit(): void {
  }

}
