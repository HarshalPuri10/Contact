import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CONTACTService {

  constructor(private http: HttpClient) { }

  addcontact(data: any) {
    
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': '' + localStorage.getItem('token1')
      })
    };
    return this.http.post(environment.baseUrl + 'contact/addContact', data, httpOption);
  }


  editcontact(data: any) {
    let url = 'http://109.106.255.69:2208/contact/updateContactById/'+data.id
    
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': '' + localStorage.getItem('token1')
      })
    };
    return this.http.put(url,data,httpOption)
  }
   
  updatecontact(data: any) { }
  deletcontact(id: any) { 
    let url = 'http://109.106.255.69:2208/contact/deleteContactById/'+id
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': '' + localStorage.getItem('token1')
      })
    };
    return this.http.delete(url,httpOption)
  }


  getallcontact() {
    let id = localStorage.getItem("id1");
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': 'Bearer' + localStorage.getItem('token1')
      })
    };
    return this.http.get(environment.baseUrl + 'contact/getAllContactByStudentId/' + id, httpOption);
  }


}
