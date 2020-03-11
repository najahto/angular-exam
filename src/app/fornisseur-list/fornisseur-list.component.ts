import { Fornisseur } from './../Modules/fornisseur/fornisseur.module';
import { Router } from '@angular/router';
import { FornisseurServiceService } from './../services/fornisseur-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornisseur-list',
  templateUrl: './fornisseur-list.component.html',
  styleUrls: ['./fornisseur-list.component.css']
})
export class FornisseurListComponent implements OnInit {
  listData : Fornisseur[];
  constructor(private service : FornisseurServiceService, private router : Router) {
    this.fetchElements();
  }

  ngOnInit() {
    this.fetchElements();

  }
  fetchElements(){
    this.service.getFornisseurs().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = res;

      }
    )

  }
  onEdit(row){
    this.service.setter(row);
    this.router.navigateByUrl('/editfornisseur');

  }
  onDelete(id){
    this.service.deleteFornisseur(id).subscribe((res)=>{
      console.log(res);
      this.fetchElements();
    });
  }

  addFornisseur(){
    let f : Fornisseur;
    this.service.setter(f);
    this.router.navigateByUrl('/addfornisseur');
  }

}
