import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {

  constructor(private myapi0:ApiService) {
    this.fetchData()
   }
fetchData=()=>{
  this.myapi0.viewleave().subscribe(
    (data)=>{
      this.viewleave=data
    }
  )
}

   viewleave:any=[]

  ngOnInit(): void {
  }

}
