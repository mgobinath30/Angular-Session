import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';


import { AuthGuard }  from '../auth-guard.service';

import { UserManagementComponent } from '../user-management/user-management.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { JkComponent } from '../JK/jk.component';

const JKRoutes : Routes = [
    {path:'',component:NotFoundComponent}, 
    {path:'jk/:id',component:JkComponent}, 
    {path:'user',canActivate:[AuthGuard],component:UserManagementComponent},
    {path:'**',component:NotFoundComponent},
  ];
  


  @NgModule({
      imports: [RouterModule.forRoot(JKRoutes)],
      exports: [RouterModule]
  })

  export class AppRoutingModule {

  }