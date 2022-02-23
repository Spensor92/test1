import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../user.types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[];
  @Output() userSelected: EventEmitter<any> = new EventEmitter();
constructor() { }

  ngOnInit(): void {
  }

selectUser() {
this.userSelected.emit();
  }
}


