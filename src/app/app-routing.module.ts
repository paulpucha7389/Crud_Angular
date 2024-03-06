import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddListProductComponent } from './components/add-list-product/add-list-product.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'add', component: AddListProductComponent},
  { path: 'edit/:id', component: AddListProductComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
