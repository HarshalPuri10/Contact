import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';


var routes:Routes = [
  { "path" : "login"    ,     component:StudentLoginComponent    },
  { "path" : "register" ,  component:StudentRegisterComponent},
  {"path":"", redirectTo : 'login' ,  pathMatch: 'full'},
  {
    "path":"contact",
    "loadChildren" : () => import("./contact/contact.module").then(m => m.ContactModule)
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
