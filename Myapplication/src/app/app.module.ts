import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { DirectiveComponent } from './directive/directive.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    DirectiveComponent,
        TestComponent,
        DemoComponent,
        UserSuccessComponent,
        ParentComponent,
        ChildComponent,
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
