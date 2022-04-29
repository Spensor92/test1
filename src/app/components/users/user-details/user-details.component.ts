import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../user.types';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

@Input() selectedUser: IUser;

changeBooleanName (hasCar: boolean) {
  if (hasCar === true) {
    return 'Yes'} else { return 'No'}
}

  constructor() { }

  ngOnInit(): void {
  }

}
