import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  imports: [],
  templateUrl: './one.html',
  styleUrl: './one.css'
})



export class One {

  @Input() msgchild:string ="";
@Input() msgchild2: string ="";

}
