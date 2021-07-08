import { NavbarComponent } from './../navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'recent-transaction',
        component: TransactionComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
]

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    SettingsComponent,
    ProductsComponent,
    UsersComponent,
    TransactionComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
