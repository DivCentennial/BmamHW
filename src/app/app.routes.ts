import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { Products } from './products/products';


export const routes: Routes = [

    {path:'homessss',component: Home},
    {path:'products',component: Products},
    
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
      }
      
];
