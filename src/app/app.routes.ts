import { Routes } from '@angular/router';
import { AreaPrivataComponent } from './components/products/area-privata.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'area-privata', component: AreaPrivataComponent }
];
