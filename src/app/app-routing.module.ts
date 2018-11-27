import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { StockItemsComponent } from './stock-items/stock-items.component';

const routes: Routes = [
  {
    path: '',  
    redirectTo:'/login',    
    pathMatch:"full"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'supplier',
    component: SupplierComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'stockItems',
    component: StockItemsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
