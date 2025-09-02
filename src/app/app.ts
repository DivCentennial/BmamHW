import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import {Emp} from './emp';
import { Testlazy } from "./testlazy/testlazy";
import { One } from "./one/one";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Testlazy, One],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Firstangular');

  empno: number;
  ename: string;
 c=10;

 str = "hello from PARENT"; // or str : string = "hello";
 str2= "Hello from PARENT str2";
  constructor(private empl:Emp){
    this.empno=this.empl.eno;
    this.ename=this.empl.ename;  }
    
}
