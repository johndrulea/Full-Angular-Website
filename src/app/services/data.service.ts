import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];

  constructor() {
    var admin = new User();
    admin.firstName = "Admin";
    admin.lastName = "User";
    admin.phoneNumber = "123";
    admin.email = "Help@systems.com"
    admin.userName = "Admin";
    admin.password = "123456";

    this.userList.push(admin);
   }

  saveUser(user){
    this.userList.push(user);
  }
}
