import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CategoryComponent } from './products/components/category/category.component';
import { StoreComponent } from './products/components/store/store.component';
import { OrdersComponent } from './products/components/orders/orders.component';
const routes: Routes = [
  {path:"products/:id" , component:AllProductsComponent},
  {path:"categories" , component:CategoryComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:"stores/:id" , component:StoreComponent},
  {path:'cart' , component:CartComponent},
  {path:'orders' , component:OrdersComponent},
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'register', 
    component:RegisterComponent
  },
  {path:"**" , redirectTo:"login" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
