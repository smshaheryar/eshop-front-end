import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import {EmployeeLogoutComponent} from './employee-logout/employee-logout.component';
import {ItemListComponent} from './item-list/item-list.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ItemEntryComponent} from './item-entry/item-entry.component';
import {CreateSupplierComponent} from './create-supplier/create-supplier.component';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import {SupplierDetailsComponent} from './supplier-details/supplier-details.component';
import {UpdateSupplierComponent} from './update-supplier/update-supplier.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';


const routes: Routes = [

  {path: '' ,  redirectTo: 'employeesList', pathMatch: 'full' },
  {path: 'employeesList' ,  component : EmployeeListComponent },
  {path: 'addEmployee' , component: CreateEmployeeComponent},
  {path: 'details/:id' , component : EmployeeDetailsComponent},
  {path: 'login' ,  component: EmployeeLoginComponent },
  {path: 'logout', component: EmployeeLogoutComponent},
  {path: 'addItems', component : CreateItemComponent},
  {path: 'itemsList', component : ItemListComponent},
  {path: 'customerList', component : CustomerListComponent},
  {path: 'addCustomer', component : CreateCustomerComponent},
  {path: 'itemEntry', component: ItemEntryComponent},
  {path: 'addSupplier', component: CreateSupplierComponent},
  {path: 'supplierList', component: SupplierListComponent},
  {path: 'supplierDetails/:id', component: SupplierDetailsComponent},
  {path: 'updateSupplier', component: UpdateSupplierComponent},
  {path: 'updateCustomer/:id', component: UpdateCustomerComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
