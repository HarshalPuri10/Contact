import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CONTACTService } from '../contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  addcontactForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),

  });

  constructor(private router: Router, private contactservice: CONTACTService, private Actrouter: ActivatedRoute) { }
  ngOnInit():void{
    this.Actrouter.queryParams.subscribe(params=> {
      let obj:any = {};
      obj.id = params["id"];
      obj.name = params["name"];
      obj.phone = params["phone"];
      obj.email = params["email"];
      obj.description = params["description"];

      this.addcontactForm.patchValue(obj);

    })
  }

  addcontact() {
    console.log(this.addcontactForm.value);

    if(this.addcontactForm.value.id != null )
    {
      this.contactservice.editcontact(this.addcontactForm.value).subscribe(success => {
        console.log("Update Success", success);
        this.router.navigate(['contact/contactform']);
      }, error => {
        console.log("Update error", error);
      }
  
      );
      
    }
    else 
    {
      this.contactservice.addcontact(this.addcontactForm.value).subscribe(success => {
        console.log("I am Success", success);
        this.router.navigate(['contact/contactform']);
      }, error => {
        console.log("I am error", error);
      }
  
      );

    }
   
  }
}
