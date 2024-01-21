import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
//import {MatInputModule} from '@angular/material/input';
console.log("user module.....");

@NgModule({
  declarations: [
    
    LoginComponent,
    SignUpComponent
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
   // MatInputModule
    
  ]
})
export class UserModule { }
