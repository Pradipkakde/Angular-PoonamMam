import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  listItem=["coffee",'Tea','milk','coldcofee','juice']
  color="red"
  showdiv :boolean=true;
  bgcolor:any='red'
  journy:any='client'
  Bike:any='platina'
  //Angular directives can be classified in 3 categories based on how they behave:
  //Component Directive
  //Structural Directive
  //comonent Directive
  //Component directives :: are used in main class. They contain the detail of how 
  //the component should be processed , instantiated and used at runtime.
  //Structural directives :: Structural directives start with a * sign.These
  //directives are used to manipulate and change the structure of the DOM elements.
  // for Example,
  //*ngIf directive ,*ngFor directive is used to repeat a portion of HTML template
  // once per each item from an iterable list (collection).
  //Attribute Directives :: Attribute directives are used to change the lok and behavior
  //of the Dom elements. For example:ngClass directive ,and ngStyle directive etc.
toggle(){
  //this.showdiv=false;
  this.showdiv=!this.showdiv;

}
getcolor(){
  return this.bgcolor
  
}
}



