import { Fornisseur } from './../Modules/fornisseur/fornisseur.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornisseurServiceService {
   url = "http://localhost:3000/Fournisseur"
  constructor(private http: HttpClient) { }

   fornissuer: Fornisseur = {
    id: null,
    nomF: '',
    nom_courtF: '',
    villeF: '',
    adressF: '',
    telFix: null,
    telMobile: null,
    fax: '',
    emailF: '',
  };

  getFornisseurs() {
    return this.http.get<Fornisseur[]>(this.url);
  }
  insertFornisseur(fornisseur) {
    console.log(fornisseur);
    return this.http.post(this.url, fornisseur);
  }
  updateFornisseur(fornisseur: Fornisseur) {
    return this.http.put(`${this.url}/${fornisseur.id}`, fornisseur);
  }
  deleteFornisseur(key) {
    return this.http.delete(`${this.url}/${key}`);

  }

  getter(){
    return this.fornissuer
  }
  setter(f:Fornisseur){
    this.fornissuer=f;
  }
}
