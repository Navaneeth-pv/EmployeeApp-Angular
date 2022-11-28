import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  Name=""
  email=""
  salary=""
  company=""


  readValues=()=>

  {

    let data:any={"Name" :this.Name,
    "email" : this.email,
    "salary" : this.salary,
    "company" : this.company}

    console.log(data)
  
  
  
  }
}
