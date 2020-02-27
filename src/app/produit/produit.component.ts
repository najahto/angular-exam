import { ProduitServiceService } from './../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/Router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor( private service : ProduitServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getProducts();
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  
  onSubmit(){
    console.log(this.service.form.value.id);
    if(this.service.form.value.id == undefined) {
      console.log("new instance");
      if(this.service.form.valid){
       this.service.insertProduct(this.service.form.value).subscribe((res) => {
         console.log(res);
       });
       this.service.form.reset();
       this.service.initializeFormGroup();
       // this.router.navigateByUrl('/emplist');
     }
    }/*
    */
    else{
     if(this.service.form.valid){
       this.service.updateProduct(this.service.form.value).subscribe((res) => {
         console.log(res);
       });
       this.router.navigateByUrl('/emplist');
     }
    }
  }

}
