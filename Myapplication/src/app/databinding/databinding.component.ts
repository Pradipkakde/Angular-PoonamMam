import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  
  pagetitle:string="Data Binding by using String ineterpolation"
  imagePath:string="assets/My Passport Photo.JPG";
  secTitle="Property Binding"
  changeName:string="This is myPhoto.."
  btnType:boolean=false;

  
  ngOnInit(): void {}
    changeTitle(){
      this.pagetitle="Interpolation by Pradip kakde"
    }
    onSave($event: any){    
      console.log("Save button is clicked!", $event);    
    }    
    onDivClick(){    
      console.log("DIV is clicked!");    
    }    
  
}
