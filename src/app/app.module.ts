import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/home/navigation/footer/footer.component';
import { HeaderComponent } from './modules/home/navigation/header/header.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
