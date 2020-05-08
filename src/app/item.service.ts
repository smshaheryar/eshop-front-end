
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8080/api/v1/items';
  constructor(private http: HttpClient) { }

  getItemList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  saveitem(item: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, item);
  }
  deleteItem(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getItemDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
     putItem(id: number, itemEntry: object): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, itemEntry);
   }


}
