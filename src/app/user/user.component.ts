import { Router } from '@angular/router';
import { UserServiceService } from './../services/user-service.service';
import { User } from './../Modules/user/user.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  profils = ['admin', 'user', 'editor'];


  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getter();
    this.user =  this.userService.getter();
  }
  onSubmit(){
    if(this.user.id == undefined){
      console.log('new instance');
      this.userService.insertUser(this.user).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('/listusers');
      });
    }
    else
    {

      this.userService.updateUser(this.user).subscribe(res=>{
        this.router.navigateByUrl('/listusers');
        console.log(res);
      });
    }
  }

}
