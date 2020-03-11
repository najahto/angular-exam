import { Fornisseur } from './../Modules/fornisseur/fornisseur.module';
import { Router } from '@angular/router';
import { FornisseurServiceService } from './../services/fornisseur-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornisseur',
  templateUrl: './fornisseur.component.html',
  styleUrls: ['./fornisseur.component.css']
})
export class FornisseurComponent implements OnInit {

  constructor(private service : FornisseurServiceService, private router: Router) {

   }
   fornisseur : Fornisseur;
  ngOnInit() {
    this.service.getFornisseurs();
    this.fornisseur =  this.service.getter();
  }
  onSubmit(){
    console.log(this.fornisseur.id);
    if(this.fornisseur.id == undefined) {
      console.log("new instance");

       this.service.insertFornisseur(this.fornisseur).subscribe((res) => {
         console.log(res);
       });
        this.router.navigateByUrl('/listfornisseurs');

    }
    else{
       this.service.updateFornisseur(this.fornisseur).subscribe((res) => {
         console.log(res);
       });
       this.router.navigateByUrl('/listfornisseurs');

    }
  }
}
