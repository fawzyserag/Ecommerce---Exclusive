import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { AdminComponent } from './core/layout/admin/admin.component';
import { UserComponent } from './core/layout/user/user.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoryComponent } from './features/category/components/category/category.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NotFoundComponent } from './core/auth/components/not-found/not-found.component';
import AuthComponent from './core/layout/auth/auth.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { BrandListComponent } from './features/brands/components/brand-list/brand-list.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';
import { ContactComponent } from './features/contact/contact/contact.component';
import { AboutComponent } from './features/about/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'brands', component: BrandListComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
