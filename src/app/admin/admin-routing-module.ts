import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Edituser } from './edituser/edituser';
import { Adduser } from './adduser/adduser';

const routes: Routes = [{path:'',
  component :Edituser
 }
];

@NgModule({
  imports: [RouterModule.forChild(  routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
