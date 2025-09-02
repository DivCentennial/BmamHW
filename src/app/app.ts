import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive,Box } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import {Emp} from './emp';
import { Testlazy } from "./testlazy/testlazy";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Testlazy],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Firstangular');

  empno: number;
  ename: string;
 c=10;
  constructor(private empl:Emp){
    this.empno=this.empl.eno;
    this.ename=this.empl.ename;  }
    
}
