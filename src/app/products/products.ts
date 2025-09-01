import { Component } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  name: string = 'Products Page';

  empno: number;
  ename: string;

  constructor(private empl:Emp){
    this.empno=this.empl.eno;
    this.ename=this.empl.ename;  }

}
