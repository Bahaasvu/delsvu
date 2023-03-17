import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../context/DTOs';
import { CreateAccount } from '../context/DTOs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(model:Login) {
    return this.http.post( environment.baseApi+ 'api/Account/login', model)
  }
  createUser(model:CreateAccount) {
    return this.http.post(environment.baseApi + 'api/Account/Register' , model)
  }
}
