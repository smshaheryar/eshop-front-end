import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {createElementCssSelector} from '@angular/compiler';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  employees: Observable<Employee[]>;
  id: number;
  employee: Employee;
  submitted = false;
  info: string;
  employeesData: [];



  constructor(private route: ActivatedRoute, private  employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(){
    this.employee = new Employee();
    this.id = this.route.snapshot.params.id;
  }

  onSubmit() {
    this.login();
  }

  login() {
    this.employeeService.getLogin(this.employee).subscribe(data => {
      for (let i = 0; i < data.length; i++){
        if (data[i].emailId == this.employee.emailId) {
          if (data[i].password == this.employee.password) {
            this.listView();
            this.employeeService.saveToken(this.employee.emailId);
          } else {
            alert("please enter the correct details")
          }
        }
    }
    }, error => console.log(error));
  }

    // addEmployees(){
    // this.router.navigate(['add']);
    // }

  listView(){
    this.router.navigate(['employeesList']);

  }



}



