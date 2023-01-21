import { Component ,Input,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CONTACTService } from '../contact.service';
import { Output,EventEmitter } from '@angular/core';
import { __values } from 'tslib';
@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {

  @Input() mycontacts:any = [];
  @Output() action = new EventEmitter<any>(); 
  
   constructor() {

   }
   ngOnInit(): void {
     
   }
   callparentedit(value:any){
     console.log('Emitting via Update');
     value.action = "update";
     this.action.emit(value);
    } 

   callparentdelet(value:any){
    console.log("Emitting via delet");
    value.action ="delete"; 
    this.action.emit(value);
  }

   

editcontact(data:any){

}


//    editcontact(contact:any){
//     console.log(contact);
//     this.router.navigate(['/contact/addcontact'],{
//       queryParams: {
        
//         "id":contact.id,
//         "name" : contact.name,
//         "email" : contact.email,
//         "phone" : contact.phone,
//         "description" : contact.description,
//       }
//     });

// }
// deletcontact(id:any){
//   console.log(id);
//   this.Contactserevice.deletcontact(id).subscribe(success=>{
    
//     console.log("Success",success);
//     window.location.reload()
    
    
    
//   },error=>{
//     console.log("error",error);
    
//   })
// }
}
