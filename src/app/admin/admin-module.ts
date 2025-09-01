import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Edituser } from './edituser/edituser';
import { Adduser } from './adduser/adduser';

@NgModule({
  declarations: [
    Edituser
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
