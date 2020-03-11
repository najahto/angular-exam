import { Client } from './../Modules/client/client.module';
import { Router } from '@angular/router';
import { ClientServiceService } from './../services/client-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  listData : Client[] = [];
  constructor(private service : ClientServiceService, private router :Router) {
    this.fetchElements();
  }

  ngOnInit() {
    this.fetchElements();
  }
  fetchElements(){
    this.service.getClients().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = res;
      }
    )
  }

  onEdit(row){
    this.service.setter(row);
    this.router.navigateByUrl('/editclient');
  }
  onDelete(id){
    this.service.deleteClient(id).subscribe((res)=>{
      console.log(res);
      this.fetchElements();
    });
  }

  addClient(){
    let c : Client;
    this.service.setter(c);
    this.router.navigateByUrl('/addclient');
  }
}
