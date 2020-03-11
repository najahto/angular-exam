import { Produit } from './../Modules/produit/produit.module';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource ,MatPaginator} from '@angular/material';
import { ProduitServiceService } from '../services/produit-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listData : Produit[] = [];

  constructor( private service : ProduitServiceService,private router:Router) {
    this.fetchElements();
  }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements(){
    this.service.getProducts().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = res;

      }
    )

  }

  onEdit(row){
    this.service.setter(row);
    // this.service.populate(row);
    this.router.navigateByUrl('/editproduct');
    // this.service.updateEmployee(row);
  }
  onDelete(id){
    this.service.deleteProduct(id).subscribe((res)=>{
      console.log(res);
      this.fetchElements();
    });
  }

  addProduct(){
    let p : Produit;
    this.service.setter(p);
    this.router.navigateByUrl('/addproduct');
  }

}
