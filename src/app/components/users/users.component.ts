import { Component, OnInit } from '@angular/core';
import { IUser } from './mockback/mockbackend.service';
@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: IUser[] = [
    {
      id: 1,
      name: 'John',
      surname: 'Smith',
      age: 25,
      email: 'john.smith@gmail.com',
      phone: '0665553344',
      hasCar: true
    },
    {
      id: 2,
      name: 'Tomas',
      surname: 'Anderson',
      age: 30,
      email: 'Tomas.Anderson@gmail.com',
      phone: '0666664343',
      hasCar: false
    },
    {
      id: 3,
      name: 'Bilbo',
      surname: 'Beggins',
      age: 27,
      email: 'Bilbo.Beggins@gmail.com',
      phone: '0662253544',
      hasCar: true
    },
    {
      id: 4,
      name: 'Bruce',
      surname: 'Wayne',
      age: 35,
      email: 'Bruce.Bruce@gmail.com',
      phone: '0665553344',
      hasCar: true
    }
  ];







  constructor () {


  }

  ngOnInit(): void {
  }

}
