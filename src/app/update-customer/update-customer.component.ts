import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {Item} from '../item';
import {Customer} from '../customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerToBeUpdated: Customer = new Customer();
  customer: Customer = new Customer();
  submitted = false;
  selectedItem ;
  constructor( private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
    this.customerService.getCustomerList()
      .pipe()
      .subscribe(response => {
        console.log(response);

        for (let i = 0; i < response.length ; i++)
        {
          this.customerToBeUpdated = response;
        //  const col = response[i];
          // this.item.push({ Name:col.item,price:col.price,quantity:col.quantity,company:col.company,size:col.size});
        }
      });
  }
  updatingCustomer() {
    //console.log('selectedItemId=' + this.selectedItem);
    console.log('area=' + this.customer.area);
    console.log('phone number=' + this.customer.phoneNumber);

    this.customerService.putCustomerDetails(this.selectedItem, this.customer).pipe().subscribe(data => console.log(data),error => console.log(error));

  }

  onSubmit(){
    this.updatingCustomer();
    this.submitted = true;
  }
}
