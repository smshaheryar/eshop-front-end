import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Observable} from 'rxjs';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  item: Observable<Item[]>;
  private id: number;
  searchText;

  constructor(private  itemService: ItemService, private router: Router) { }


  ngOnInit(){
  this.reloadData();
   }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'List-of-item.xlsx');
  }

  reloadData() {
    this.itemService.getItemList()
      .pipe()
      .subscribe(response => {
        console.log(response);

        for (let i = 0; i < response.length ; i++)
        {
          this.item = response;
          let col = response[i];
          // this.item.push({ Name:col.item,price:col.price,quantity:col.quantity,company:col.company,size:col.size});
        }
      });

  }



  deleteItem(id:number){
    alert('deletion' + this.id);
    this.itemService.deleteItem(id).pipe()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        }, error => console.log(error)
      );
  }
  itemDetails(id: number){
    this.router.navigate(['itemDetails', id]);
  }

}

