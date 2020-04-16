import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  allUsers : User[]=[];

  constructor( private data: DataService) {
    this.allUsers =data.userList;

  }

  ngOnInit(): void {
  }

}