import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dataservice:DataService,private router :Router){}
  name="pradip";
  //isShowPass: false;
  login(data:any){
    console.log('data',data);
this.dataservice.userName=data.uName //pradip
this.router.navigateByUrl('/user/userSucess');
}
//toShowPassword(){
 // this.isShowPass=!this.isShowPass;
}
//}