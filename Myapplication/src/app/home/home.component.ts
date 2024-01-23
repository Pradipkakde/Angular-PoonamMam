import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//constructor is a method which get invoked internally at the time of component initializtion
constructor(private router : Router){}

test(){
  this.router.navigateByUrl('test')
 
}
directivecomponent(){
  this.router.navigateByUrl('directive')
}
admin(){
  this.router.navigateByUrl('admin/adminlanding')
}
templatedrive(){
  this.router.navigateByUrl('form/templatedriven')
}

}
