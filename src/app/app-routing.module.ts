import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AfsProductsComponent} from "./afs-products/afs-products.component";


const routes: Routes = [
  {path: 'afs-products', component: AfsProductsComponent/*, children: [
      {path: 'afs-product-one', component: ProfileRouteComponent},
      {path: 'afs-product-two', component: ProfileRouteComponent},
      {path: 'afs-product-two', component: ProfileRouteComponent}
    ]*/},
  /*{path: 'contacts', redirectTo: '/home', pathMatch: 'full', children: [
      {path: 'director', component: DirectorContactsRouteComponent}
    ]},*/
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
