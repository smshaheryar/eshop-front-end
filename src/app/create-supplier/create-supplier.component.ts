import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../supplier.service';
import {Router} from '@angular/router';
import {Item} from '../item';
import {Supplier} from '../supplier';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
  supplier: Supplier =new Supplier();
  submitted =false;
  constructor( private supplierService: SupplierService, private router:Router) {}

  ngOnInit() {
  }
  save(){
    this.supplierService.saveSupplier(this.supplier).pipe().subscribe(data => console.log(data),
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }




}
