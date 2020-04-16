import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  model = new User();
  retypePass = "";
  alertVisible = false;


  constructor( private data: DataService ) { }

  save(){
    this.data.saveUser(this.model);
    //clear the form
    this.model = new User();  // this will clear the object on memory
    this.retypePass = "";

    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000)
  }

  isDataCorrect(){
    return this.model.userName && this.model.email && this.model.password  == this.retypePass;

  }
}
