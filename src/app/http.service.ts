import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }
  //get the user information on the web page (service setup to talk to the server)
  getUsers(){
    return this.httpClient.get('http://localhost:3000/users');
  }

//to create the new user
  createUser(newUser: any){
    return this.httpClient.post( 'http://localhost:3000/users', newUser);
  }

  // + id= to know which id we want to delete
   deleteUser(id:number){
    return this.httpClient.delete(' http://localhost:3000/users/' + id);

}

//update

  updateUser(updateUser:any){
    return this.httpClient.put(' http://localhost:3000/users/' + updateUser.id, updateUser);
  }


  }

