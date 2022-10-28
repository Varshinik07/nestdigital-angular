import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

import { EmployeeentryComponent } from './employeeentry/employeeentry.component';
import { RouterModule,Routes } from '@angular/router';



const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"entry",component:EmployeeentryComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
  
    EmployeeentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
