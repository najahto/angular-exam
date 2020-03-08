import { Client } from './../Modules/client/client.module';
import { Router } from '@angular/Router';
import { ClientServiceService } from './../services/client-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service : ClientServiceService, private router : Router) { }
  private client:Client; 
  ngOnInit() {
    this.service.getClients();
    this.client =  this.service.getter();
  }
  onSubmit(){
    console.log(this.client.id);
    if(this.client.id == undefined) {
      console.log("new instance");
      
       this.service.insertClient(this.client).subscribe((res) => {
         console.log(res);
       });
      //  this.service.form.reset();
      //  this.service.initializeFormGroup();
        this.router.navigateByUrl('/listclients');
     
    }/*
    */
    else{
       this.service.updateClient(this.client).subscribe((res) => {
         console.log(res);
       });
       this.router.navigateByUrl('/listclients');
     
    }
  }
}
