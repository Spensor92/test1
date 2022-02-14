import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component'
import { UsersService } from './components/users/users.service';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
