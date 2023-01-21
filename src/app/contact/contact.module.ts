import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactformComponent } from '../contactform/contactform.component';
import { MytableComponent } from '../mytable/mytable.component';
var routes : Routes = [
  {
    "path": "addcontact",component:AddContactComponent
  },
  {
    "path":"editcontact",component:EditContactComponent
  },
  {
    "path":"", redirectTo:'contactform',pathMatch:'full'
  },
  {
    "path":"contactform",component:ContactformComponent
  }
 
];

@NgModule({
  declarations: [
    EditContactComponent,
    AddContactComponent,
    ContactformComponent,
    MytableComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
