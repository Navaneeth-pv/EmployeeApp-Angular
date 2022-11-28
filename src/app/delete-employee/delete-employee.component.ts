import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  employeeCode=""

  readValues=()=>
  {
    let data:any={
      "employeeCode":this.employeeCode
    }
    console.log(data)
  }

}
