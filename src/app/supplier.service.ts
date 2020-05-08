import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:8080/api/v1/supplier';
  constructor(private http: HttpClient) { }

  getSupplierList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  saveSupplier(supplier: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, supplier);
  }
  deleteSupplier(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getSupplierDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
    updateSupplier(id: number, updateSupplier: object): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, updateSupplier);
  }


}

