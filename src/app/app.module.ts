import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JkComponent } from './JK/jk.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { NewServiceService } from './new-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent , JkComponent, HeroDetailComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
