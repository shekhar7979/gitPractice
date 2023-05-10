import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public alldata:any=[];

  onClick(data:any)
  {
    console.log(data.value)
    this.alldata.push(data.value)
    console.log(this.alldata)
  }

}
