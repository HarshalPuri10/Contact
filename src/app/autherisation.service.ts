import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AutherisationService {

  constructor(private http:HttpClient) { }


  register(data:any){
    return this.http.post(environment.baseUrl + 'student/register',data);

  }

  login(data:any){
    return this.http.post(environment.baseUrl + 'student/login',data);

  }
}

