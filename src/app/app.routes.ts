import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { Products } from './products/products';


export const routes: Routes = [
{ path: '', redirectTo: 'homessss', pathMatch: 'full' },
    {path:'homessss',component: Home},
    {path:'products',component: Products},
    
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
      },

      { path:'adduser',
 loadComponent :()=> import('./admin/adduser/adduser').then(c=>c.Adduser)
     },

     {
 path:'testlazy',
 loadComponent :()=> import('./testlazy/testlazy').then(c=>c.Testlazy)
}


];
