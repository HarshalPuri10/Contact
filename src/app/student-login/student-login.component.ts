import { MessageBundle } from '@angular/compiler';
import { Component} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AutherisationService } from '../autherisation.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
loginForm = new FormGroup ({
  email : new FormControl('',[Validators.required,Validators.email]),
  password : new FormControl('',[Validators.required,Validators.minLength(4)])
});


constructor(private auth:AutherisationService,private routes:Router){}

login(){
  
  console.log(this.loginForm.value);
  this.auth.login(this.loginForm.value).subscribe(success =>{
    console.log("I am Success",success);
    let data:any=success;
    this.routes.navigate(['/contact/contactform']);
       
     window.alert("Login successful") 
     
    localStorage.setItem("id1",data.data.id)
    localStorage.setItem("token1",data.data.token)
  },error => {
    console.log("I am error",error);
  });}
}