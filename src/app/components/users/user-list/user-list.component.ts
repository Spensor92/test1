import { NgClass } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../user.types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[];
  @Output() userSelected: EventEmitter<IUser> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectUser(user: IUser): void {
    this.userSelected.emit(user);
    this.users.forEach((userItem) => {
      userItem.isSelected = user.id === userItem.id;
    });
  }
}
