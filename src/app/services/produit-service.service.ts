import { Produit } from './../Modules/produit/produit.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
   url = "http://localhost:3000/Produit"
  constructor(private http: HttpClient) { }

  // });
   produit:Produit = {
    id: null,
    nom: '',
    nom_court: '',
    prix_de_bas: null,
    prix_de_vente: null,
    unite:'',
    remise: '',
    image: '',
    quantite_initial: null,
    quantite_en_stock: null,
};

getProducts() {
  return this.http.get<Produit[]>(this.url);
}
insertProduct(produit) {
  console.log(produit);
  return this.http.post(this.url, produit);
}
updateProduct(produit: Produit) {
  return this.http.put(`${this.url}/${produit.id}`, produit);
}
deleteProduct(key) {
  return this.http.delete(`${this.url}/${key}`);

}
getter(){
  return this.produit
}
setter(p:Produit){
  this.produit=p;
}
}
