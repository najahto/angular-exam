export interface Produit  {
  id?:number;
  nom : string;
  nom_court: string;
  prix_de_bas: number;
  prix_de_vente: number;
  remise: string;
  unite: string;
  image: string;
  quantite_initial:number;
  quantite_en_stock: number;
}