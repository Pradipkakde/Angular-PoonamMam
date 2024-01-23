import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { DirectiveComponent } from './directive/directive.component';


const routes: Routes = [
  {path :"", component:HomeComponent},
  {path :"databinding", component:DatabindingComponent},
  {path :"test", component:TestComponent},
  {path :"demo", component:DemoComponent},
  {path :"directive", component:DirectiveComponent},
 
  {path : 'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
 // {path:'from',loadChildren:()=>import('./form/form.module').then(r=>r.FormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
