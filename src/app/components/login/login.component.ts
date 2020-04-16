import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName='';
  password='';
  allUsers = [];

  constructor( private data: DataService) {
    //get all users
    this.allUsers = data.userList;
   }

  login(){
    //tracel the list of users

    var found = false;
    for(let i=0; i < this.allUsers.length; i++){
    var user = this.allUsers[i];
      if(user.userName.toLowerCase() == this.userName.toLowerCase() && user.password == this.password){
        console.log("Logged in correctly");
        var found = true;
      }  
    }
    if(!found){
      console.error("wrong credentials!");
    }

  }
}
