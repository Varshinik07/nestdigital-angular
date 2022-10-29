import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { RouterModule,Routes } from '@angular/router';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import{HttpClientModule} from '@angular/common/http';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes:Routes=[
  
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"navbar",component:NavbarComponent
  },
  {
    path:"employeeentry",component:EmployeeentryComponent
  },
  {
    path:"viewemployee",component:ViewemployeeComponent
  },
  {
    path:"searchemployee",component:SearchemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
  
    EmployeeentryComponent,
       ViewemployeeComponent,
       SearchemployeeComponent,
       NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
