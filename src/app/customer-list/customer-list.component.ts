import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer:Observable<Customer[]>;
  private id: number;
  searchText;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.customerService.getCustomerList().pipe()
      .subscribe(response =>{
        console.log(response);

        for(var i=0; i <response.length ;i++)
        {
          var column = response[i];
          this.customer=response;
          //this.customer.push({Name: column.name,phoneNumber:column.phoneNumber,area: column.area});
        }
      });
  }


  deleteCustomer(id: number) {
    alert('deletion'+ this.id)
    this.customerService.deleteCustomer(id).pipe()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateCustomer(id: number){
    this.router.navigate(['updateCustomer', id]);
  }













}
