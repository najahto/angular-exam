import { Router } from '@angular/Router';
import { UserServiceService } from './../services/user-service.service';
import { User } from './../Modules/user/user.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  onDelete(user: User) {
    this.userService.deleteUser(user.id).subscribe(res => {
      console.log(res);
      this.getAllUsers();
    });
  }

  onEdit(user: User) {
    this.userService.setter(user);
    this.router.navigateByUrl('/edituser');
  }
  newUser() {
    let user: User = {
      date_creation: null,
      photo: '',
      date_fin: null,
      email: '',
      profil: '',
      identifiant: ''
    };
    this.userService.setter(user);
    this.router.navigateByUrl('/adduser');
  }

}
