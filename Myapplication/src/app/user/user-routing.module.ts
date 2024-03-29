import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserSuccessComponent } from '../user-success/user-success.component';

const routes: Routes = [
  {path:'Login', component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'userSucess',component:UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
