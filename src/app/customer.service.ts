import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/api/v1/customer';
  constructor(private http:HttpClient) { }
  getCustomerList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  saveCustomer(item: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, item);
  }
    deleteCustomer(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getCustomerDetails(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }
  putCustomerDetails(id: number, updatedCustomerDetails: object): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, updatedCustomerDetails);
  }
}
