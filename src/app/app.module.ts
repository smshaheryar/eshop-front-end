import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLogoutComponent } from './employee-logout/employee-logout.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeLoginComponent,
    EmployeeLogoutComponent,
    ItemListComponent,
    CreateItemComponent,
    CreateCustomerComponent,

    CustomerListComponent,
    UpdateCustomerComponent,
    ItemEntryComponent,
    CreateSupplierComponent,
    SupplierListComponent,
    SupplierDetailsComponent,
    UpdateSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatTableModule,
    NgSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
