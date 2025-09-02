import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  imports: [],
  templateUrl: './one.html',
  styleUrl: './one.css'
})

export class One {

  @Input() msgchild:string ="";
@Input() msgchild2: string ="";

@Output() msgOutput:EventEmitter<string>= new EventEmitter(); 
outmsg:string = " from child to parent !!!"

str1:string= "Testing child value"

sendValue(){ 
   this.msgOutput.emit(this.outmsg); 
   console.log("hello") }
  

}
