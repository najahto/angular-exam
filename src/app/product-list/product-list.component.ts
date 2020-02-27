import { Produit } from './../Modules/produit/produit.module';
import { Router } from '@angular/Router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProduitServiceService } from '../services/produit-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html', 
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listData = new MatTableDataSource<Produit>();
  displayedColumns: string[] = ['nom', 'nom_court', 'prix_de_bas', 'prix_de_vente', 'remise', 'quantite_initial', 'quantite_en_stock', 'Actions'];

  constructor( private service : ProduitServiceService,private router:Router) { }

  ngOnInit() {
  }

  fetchElements()
  {
    this.service.getProducts().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = new MatTableDataSource(res as any);
      }
    )
  }
  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }
  


}
