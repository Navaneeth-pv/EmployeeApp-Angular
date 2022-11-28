import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
