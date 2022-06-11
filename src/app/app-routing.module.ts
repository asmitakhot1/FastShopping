import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'login', component:LoginComponent},
  {path:'cart', component:CartComponent},
  {path:'signup', component:SignupComponent},
  {path:'electronics', component:ElectronicsComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
