import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employeeCode=""

  readValues=()=>
  {
    let data:any={
      "employeeCode":this.employeeCode
    }
    console.log(data)
  }

}
