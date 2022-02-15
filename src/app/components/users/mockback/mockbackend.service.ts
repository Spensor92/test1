import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUser {
  id?: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  phone: string;
  hasCar: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MockbackendService {
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

  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  editUser(newUserData: IUser): Observable<string> {
    let editedUser = this.users.find(user => user.id === newUserData.id);

    if (editedUser) {
      editedUser = {
        ...editedUser,
        ...newUserData
      };

      // success
      return of('success');
    } else {
      // error
      return of('Error: User not found');
    }
  }

  deleteUser(userId: number): Observable<string> {
    const userLength = this.users.length;

    this.users = this.users.filter((user) => user.id !== userId);

    if (this.users.length !== userLength) {
      return of('success');
    } else {
      return of('Error: User not found');
    }
  }

  addUser(user: IUser): Observable<string> {
    this.users.push({
      ...user,
      id: this.users.length + 1
    });

    return of('success');
  }
}
