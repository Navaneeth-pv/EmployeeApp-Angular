import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  userName=""
  password=""

  readValues=()=>
  {
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    if (this.userName=="admin" && this.password=="12345") {
      alert("valid login")
    } else {
      alert("invalid credentials")
      
    }
  }


}
