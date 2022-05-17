import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JkComponent } from './JK/jk.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// import { NewServiceService } from './new-service.service';
import { UserServiceService } from './user-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserFilterPipe } from './user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent , JkComponent, HeroDetailComponent, HeaderComponent, FooterComponent, UserFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
