import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {Routes , RouterModule} from '@angular/router';

const JKRoutes : Routes = [
  {path:'',component:UserManagementComponent}, 
  {path:'jk/:id',component:JkComponent}, 
  {path:'user',component:UserManagementComponent},
  {path:'**',component:NotFoundComponent},
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JkComponent } from './JK/jk.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// import { NewServiceService } from './new-service.service';
import { UserServiceService } from './user-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserFilterPipe } from './user-filter.pipe';
import { UserManagementComponent } from './user-management/user-management.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent , JkComponent, HeroDetailComponent, HeaderComponent, FooterComponent, UserFilterPipe, UserManagementComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(JKRoutes)
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
