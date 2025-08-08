import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/show/products.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot/forgot.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AddProductComponent } from './components/products/add/add-product/add-product.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/add', component: AddProductComponent },
];

//AddProductComponent
