import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CONTACTService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {

  constructor(private Cservice:CONTACTService, private router:Router) { }

  updateform = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl('')
  });

  // updatecontact() {
  //   console.log(this.updateform.value);
  //   this.Cservice.updatecontact(this.updateform.value).subscribe(success => {
  //     console.log("I am Success", success);
      
  //   this.router.navigate(['/contact/contactform']);
    
      
  //   }, error => {
  //     console.log("I am error", error);
  //   }

  //   );
  // }
}


