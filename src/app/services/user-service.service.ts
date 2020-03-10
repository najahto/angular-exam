import { HttpClient } from '@angular/common/http';
import { User } from './../Modules/user/user.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private Url = "http://localhost:3000/users";
  private user: User = {
    identifiant: '',
    date_creation: null,
    photo: '',
    date_fin: null,
    email: '',
    profil: '',
  };
  constructor(private http: HttpClient) { 
  }
  getUsers() {
    return this.http.get<User[]>(this.Url);
  }
  deleteUser(id: number) {
    return this.http.delete<User>(this.Url + `/${id}`);
  }
  insertUser(user: User) {
    return this.http.post<User>(this.Url, user);
  }
  updateUser(user: User) {
    return this.http.put<User>(this.Url + `/${user.id}`, user);
  }
  setter(user: User) {
    this.user = user;
  }
  getter() {
    return this.user;
  }
}
