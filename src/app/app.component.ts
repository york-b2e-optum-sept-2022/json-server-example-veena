import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any = null;
  nameInput: string = "";
  userIdInput: string = "";

  updateUserInputId: string = "";
  updateUserInputName: string = "";



  constructor(private httpService : HttpService) {
    this.getUsers();
  }

  getUsers(){
     //to display the users on the webpage , subscribe and unsubscribe
    this.httpService.getUsers().pipe(first()).subscribe({
      next:(data) => {
        console.log(data);
        this.users= data;
      },
      error:(err) => {
        console.error(err);
      }
    })
  }

  //adding new user to our list and sends the data to http.service
  //send the req to the http server
  createUser(){
    const newUser = {id:new Date().getTime(),name:this.nameInput}
    this.httpService.createUser(newUser).pipe(first()).subscribe({
      next:(data) =>{
        console.log(data);
        this.getUsers();
      },
      error:(err) =>{
        console.error(err);
      }
    })
  }

  //Delete user from the list
  //once it clicked sends a req to http service to delete the id
  deleteUser(){
    const  id = parseInt(this.userIdInput);
    this.httpService.deleteUser(id).subscribe({
      next:(data) =>{
        console.log(data);
        this.getUsers();
      },
      error:(err) =>{
        console.error(err);
      }
    })
  }

  //update userinput id

  updateUser(){
    const updatedUser ={
      id: parseInt(this.updateUserInputId),
      name: this.updateUserInputName
    }
    this.httpService.updateUser(updatedUser).subscribe({
      next:(data) => {
        console.log(data);
        this.getUsers();
      },
      error:(err) =>{
        console.log(err);
      }
    })
  }





}
