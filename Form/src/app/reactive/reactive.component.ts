import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  integerRegex=/^\d+$/;
  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  title='reactive-form';
  registerForm=new FormGroup({
    fname :new FormControl("",[Validators.required,Validators.maxLength(32)]),
    lname :new FormControl("",[Validators.required,Validators.maxLength(32)]),
    age   :new FormControl("",[Validators.required,Validators.max(60),Validators.min(18),Validators.pattern(this.integerRegex)]),
    mobile   :new FormControl("",[Validators.required,Validators.max(10),Validators.min(10),Validators.pattern(this.integerRegex)]),
  email   :new FormControl("",[Validators.required,Validators.max(32),Validators.min(32),Validators.pattern(this.emailRegex)]),
password  :new FormControl("",[Validators.required,Validators.max(12),Validators.min(10)]),
  confirmpassword  :new FormControl("",[Validators.required,Validators.max(12),Validators.min(10)]),
  }) 
  registerFn(){
    console.log(this.registerForm.value);
  }

}
