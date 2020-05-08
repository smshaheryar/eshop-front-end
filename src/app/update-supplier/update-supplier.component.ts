import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../supplier';
import {SupplierService} from '../supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  supplierToBeUpdated: Supplier = new Supplier();
  supplier: Supplier = new Supplier();
  submitted = false;
  selectedItem ;
  id: number;
  constructor(private route: ActivatedRoute, private supplierService:SupplierService,private router:Router) { }

  ngOnInit() {
   // this.id = this.route.snapshot.params['id'];
    this.supplierService.getSupplierList()
      .pipe()
      .subscribe(response => {
        console.log(response);

        for (let i = 0; i < response.length ; i++)
        {
          this.supplierToBeUpdated = response;
          //  const col = response[i];
          // this.item.push({ Name:col.item,price:col.price,quantity:col.quantity,company:col.company,size:col.size});
        }
      });
  }
  updatingSupplier() {
    console.log('selectedItemId=' + this.selectedItem);
    console.log('totalBalance=' + this.supplier.totalBalance);
    console.log('remainingBalance=' + this.supplier.remainingBalance);
    console.log('lastPaymentDate=' + this.supplier.lastPaymentDate);
    console.log('lastPayment=' + this.supplier.lastPayment);
    this.supplierService.updateSupplier(this.selectedItem, this.supplier).pipe().subscribe(
      data => console.log(data),error => console.log(error));

  }

  onSubmit(){
    this.updatingSupplier();
    this.submitted = true;
  }

}
