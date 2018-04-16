import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from "./child/app.childcomponent";
@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpModule ],
  declarations: [ AppComponent, HelloComponent,ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
