import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { RequestComponent } from './components/request/request.component';
import { RequestResponseComponent } from './components/request-response/request-response.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RequestFormComponent,
    RequestComponent,
    RequestResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
