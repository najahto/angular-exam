
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { ProduitComponent } from './produit/produit.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes =[
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'addproduct',  component: ProduitComponent},
    { path: 'editproduct',  component: ProduitComponent},
    { path: 'listproduct',  component: ProductListComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}