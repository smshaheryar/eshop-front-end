import { Component, OnInit } from '@angular/core';
import {Supplier} from '../supplier';
import {SupplierService} from '../supplier.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
id: number;
supplier: Supplier;
  constructor(private route: ActivatedRoute, private supplierService: SupplierService ,
              private  router: Router) { }

  ngOnInit(){
  alert('hello');
  this.supplier = new Supplier();
  this.id = this.route.snapshot.params['id'];
  this.supplierService.getSupplierDetails(this.id)
    .pipe()
    .subscribe(data => {
      console.log(data);
      this.supplier=data;
    },error => console.log(error)
    );
  }
  list(){
    this.router.navigate(['supplierList']);
  }


}
