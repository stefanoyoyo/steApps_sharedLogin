import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot/forgot.component';
import { RegisterComponent } from './components/register/register/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent }
];
