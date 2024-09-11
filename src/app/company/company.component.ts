import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  companyname:string="ABC Company";
  // @ViewChild(EmployeeComponent) emp!:EmployeeComponent;

    @ViewChildren(EmployeeComponent) emp!:QueryList<EmployeeComponent>;
  onClickMeClicked()
  {
    console.log(this.emp);
   var a= this.emp.toArray();
    for(var i=0;i<a.length;i++)
    {
     
      a[i].empname="anil";
    }
    // this.emp.EmpName="john";
  }

}
