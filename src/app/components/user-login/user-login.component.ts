import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userName = '';
  password = '';
  allUsers = [];
  loginError = false;

  constructor( private data: DataService, private router: Router, private shared: SharedService) { 
    this.allUsers = data.userList;

  }

  login(){
    var found = false;
    for(let i=0; i < this.allUsers.length; i++)
    var user = this.allUsers[i];
    if(user.userName.toLowerCase() == this.userName.toLowerCase() && user.password == this.password){
      console.log("Logged in correctly!");
      found = true;
      this.loginError = false;

      this.shared.isUserLoggedIn = true;
      this.userName = user.userName;

      this.router.navigate(['/user-register']);
    }
    
    if(!found){
      console.error("wrong Credientials!")
      this.loginError = true;
    }
  }

  ngOnInit(): void {
  }




}
