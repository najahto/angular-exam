import { FornisseurComponent } from './fornisseur/fornisseur.component';
import { FornisseurListComponent } from './fornisseur-list/fornisseur-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { ProduitComponent } from './produit/produit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientComponent } from './client/client.component';


const routes: Routes =[
    { path: '', redirectTo: '/listproduct', pathMatch: 'full'},
    { path: 'addproduct',  component: ProduitComponent},
    { path: 'editproduct',  component: ProduitComponent},
    { path: 'listproduct',  component: ProductListComponent},
    { path: 'listfornisseurs',  component: FornisseurListComponent},
    { path: 'addfornisseur',  component: FornisseurComponent},
    { path: 'editfornisseur',  component: FornisseurComponent},
    { path: 'listclients',  component: ClientListComponent},
    { path: 'addclient',  component: ClientComponent},
    { path: 'editclient',  component: ClientComponent},
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}