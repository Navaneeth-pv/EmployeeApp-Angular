import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  name=""
  email=""
  salary=""
  company=""
  EmployeeCode=""
  designation=""
  phoneNo=""
  yoe=""
  password=""


  readValues=()=>

  {

    let data:any={"name" :this.name,
    "email" : this.email,
    "salary" : this.salary,
    "company" : this.company,
    "EmployeeCode":this.EmployeeCode,
    "designation":this.designation,
    "phoneNo":this.phoneNo,
    "yoe":this.phoneNo,
    "password":this.password
  
  }

    console.log(data)
  
  
  
  }
}
