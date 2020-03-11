import { Produit } from './../Modules/produit/produit.module';
import { ProduitServiceService } from './../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor( private service : ProduitServiceService, private router: Router) { }
   produit:Produit;
  ngOnInit() {
    this.service.getProducts();
    this.produit =  this.service.getter();

  }

  onSubmit(){
    console.log(this.produit.id);
    if(this.produit.id == undefined) {
      console.log("new instance");
       this.service.insertProduct(this.produit).subscribe((res) => {
         console.log(res);
       });
      //  this.service.form.reset();
      //  this.service.initializeFormGroup();
        this.router.navigateByUrl('/listproduct');

    }/*
    */
    else{
       this.service.updateProduct(this.produit).subscribe((res) => {
         console.log(res);
       });
       this.router.navigateByUrl('/listproduct');

    }
  }

}


