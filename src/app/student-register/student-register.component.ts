import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutherisationService } from '../autherisation.service';
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  Register_Form = new FormGroup({
  studentName: new FormControl('',[Validators.required,Validators.min(5)]),
  phone: new FormControl('',[Validators.required,Validators.pattern('')]),
  email: new FormControl(''),
  rollNo: new FormControl(''),
  password: new FormControl('')
  });
  constructor(private router:Router , private Authservice:AutherisationService){}
  
  Register(){
    console.log(this.Register_Form.value);
    this.Authservice.register(this.Register_Form.value).subscribe(success =>{
      console.log("I am Success",success);
      this.router.navigate(['/login']);
    },error => {
      console.log("I am error",error);
    }
    
    );
    
    
    
  

}
}