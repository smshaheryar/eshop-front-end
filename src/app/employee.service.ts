import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';
  private loginUrl = 'http://localhost:8080/api/v1//api/authentication'
  private user: any;
  public token: string;
  constructor(private http: HttpClient) { }
   saveToken(employee: string): void {
    localStorage.setItem('employeeToken', employee);
    console.log(employee);
    this.token = employee;
  }
    getToken(): string {
      return this.token;
  }
    getEmployee(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }
   getUser(employee:Employee): Observable<any>{
    return this.http.get(`${this.loginUrl}/${employee.emailId}/${employee.password}`);
    }

    getLogin(employee: Employee): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
   }


  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
