import { UserComponent } from './user/user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeAdminComponent
      },
      {
        path: 'list-product',
        component: ProductsComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }
    ]
  },
]

@NgModule({
  declarations: [
    HomeAdminComponent,
    ProductsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
