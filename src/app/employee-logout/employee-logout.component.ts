import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Observable} from 'rxjs';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee-logout',
  templateUrl: './employee-logout.component.html',
  styleUrls: ['./employee-logout.component.css']
})
export class EmployeeLogoutComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private route: ActivatedRoute, private  employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(){
  alert("Successfully logout logoout");

  this.employeeService.saveToken(null);

  this.router.navigate(['login']);
  }
}
