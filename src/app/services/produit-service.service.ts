import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Produit } from '../Modules/produit/produit.module';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  private url = "http://localhost:3000/Produit"
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    //key to controle each employee in from
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    nom_court: new FormControl('', Validators.required),
    prix_de_bas: new FormControl('', Validators.required),
    prix_de_vente: new FormControl('', Validators.required),
    remise: new FormControl(''),
    unite: new FormControl(''),
    image: new FormControl(''),
    quantite_initial: new FormControl(''),
    quantite_en_stock: new FormControl(''),
  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: '',
      nom_court: '',
      prix_de_bas: '',
      prix_de_vente: '',
      remise: '',
      image: '',
      quantite_initial: '',
      quantite_en_stock: '',

    });
}
getProducts() {
  return this.http.get<Produit>(this.url);
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

populate(row) {
  this.form.setValue(row);
}
}