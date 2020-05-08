import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  item: Item =new Item();
  submitted =false;
  constructor(private  itemService: ItemService,private router:Router) { }


  ngOnInit(){
  }
  newItem():void{
    this.submitted=false;
    this.item=new Item();
}

save(){
    this.itemService.saveitem(this.item).subscribe( data=> console.log(data),error => console.log(error));
    this.item = new Item();
}
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
