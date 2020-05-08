import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from '../supplier';
import {SupplierService} from '../supplier.service';
import {Router} from '@angular/router';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  supplier: Observable<Supplier[]>
  private id: number;
  searchText;
  constructor(private supplierService: SupplierService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
  this.supplierService.getSupplierList()
  .pipe()
 .subscribe(
      response => {
        console.log(response);

        for (let i = 0; i < response.length ; i++)
        {
          this.supplier  = response;
       //   let col = response[i];
          // this.item.push({ Name:col.item,price:col.price,quantity:col.quantity,company:col.company,size:col.size});
        }
      });


  }

updateSupplierDetail(id: number){
  this.router.navigate(['supplierDetails', id]);
  }
  delete(id:number){
    this.supplierService.deleteSupplier(id).pipe()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        }, error => console.log(error)
      );
}
    updateSupplier(){
        this.router.navigate(['updateSupplier']);
    }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'supplier.xlsx');
  }
}
