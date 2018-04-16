import { Component , Input , OnChanges , SimpleChanges , OnInit , Injectable } from "@angular/core";

@Component({
    selector: "child",
    templateUrl: "./app.child.html"
})
 
export class ChildComponent implements OnChanges,OnInit{
  @Input() name:string;

  ngOnChanges(somevalue:SimpleChanges){
    console.log("sdf");
    console.log(somevalue["name"].currentValue);
    console.log(somevalue["name"].previousValue);
  }

  constructor(){
    console.log("This is the constructor");
  }

  ngOnInit(){
    console.log("here is the first init method");
  }

}