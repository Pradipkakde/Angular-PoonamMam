import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  city:string="pune";
  myname:string="Pradip kake"
  myname1="Pravin";

  isDisable=false;
  fruit!:string;
  vegetable!:string;
  favfruit="mango";
  Head= 'Data binding example using String Interpolation';    
    numberA: number = 10;    
    numberB: number = 20;  
    numberc: number =30;  
    constructor(){}
    submit(){
    this.fruit="mango is a very sweet fruit";
    this.vegetable="ginger,tomato"
  

}
}