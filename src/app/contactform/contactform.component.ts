import { NgFor } from '@angular/common';
import { Component,OnInit, Output } from '@angular/core';

import { CONTACTService } from '../contact.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  
  contacts:any = [];
  constructor(private contactservice:CONTACTService , private router:Router , private Actrouter:ActivatedRoute){}

  ngOnInit():void{
    this.getallcontact();
    
  }
  getaction(obj:any){
    console.log("In parent",obj);
    if (obj.action == "update")
    {
      console.log("Updating in Parent");
      this.editcontact(obj);
    }
    else 
    {
      console.log("Deleting in Parent");
      this.deletcontact(obj);
    }
    
  }

  editcontact(contact:any){
    console.log(contact);
    this.router.navigate(['/contact/addcontact'],{
      queryParams: {
        
        "id":contact.id,
        "name" : contact.name,
        "email" : contact.email,
        "phone" : contact.phone,
        "description" : contact.description,
      }
    });

        
  }
  deletcontact(id:any){
    console.log(id);
    this.contactservice.deletcontact(id.id).subscribe(success=>{
      
      console.log("Success",success);
      window.location.reload();
      
      
      
    },error=>{
      console.log("error",error);
      
    })
  }

  getallcontact(){
    this.contactservice.getallcontact().subscribe(success=>{
      let data:any = success;
      console.log("Success",success);
      this.contacts = data.data;
      
    },error=>{
      console.log("error",error);
      
    })
  }
  
}
