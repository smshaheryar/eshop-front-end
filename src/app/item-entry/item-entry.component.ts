import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {
  itemList: Item = new Item();
  item: Item = new Item();
  submitted = false;
  selectedItem ;
  constructor(private  itemService: ItemService, private router: Router) { }

  ngOnInit(){

    this.itemService.getItemList()
      .pipe()
      .subscribe(response => {
        console.log(response);

        for (let i = 0; i < response.length ; i++)
        {
          this.itemList = response;
          const col = response[i];
          // this.item.push({ Name:col.item,price:col.price,quantity:col.quantity,company:col.company,size:col.size});
        }
      });

  }
  alert(){
    alert('h gyaay'+this.selectedItem);
  };
  updatingItem() {
    console.log('selectedItemId=' + this.selectedItem);
    console.log('quantity=' + this.item.quantity);
    console.log('price=' + this.item.price);
    console.log('size=' + this.item.size);
    console.log('current item id =' + this.item.id);
    this.itemService.putItem(this.selectedItem, this.item).pipe().subscribe(data=> console.log(data),error => console.log(error))

  }

  onSubmit(){
   this.updatingItem();
    this.submitted = true;
  }
}


