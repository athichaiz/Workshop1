import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { APIComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APIsService } from './apis.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    APIComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [APIsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
