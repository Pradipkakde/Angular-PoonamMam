import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapplication';
  form={
    fname :'',
    lname :'',
    pan :'',
    mobile:'',
    email:'',
    age:''
  }
  registerFn(){
    console.log(this.form)
  }

}
