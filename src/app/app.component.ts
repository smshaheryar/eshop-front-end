import {Component, OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';
import {Employee} from './employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private router:Router, public  employeeService: EmployeeService){}
  public token: string;
  title = 'SANA AUTOS';
  ngOnInit(){
    this.hasToken();
  }

  public hasToken(): boolean {
    this.token = this.employeeService.getToken();
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }
  logout(){
    this.router.navigate(['logout']);
  }

}
