import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material/material.module';
import { FormComponent } from './form/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    CustomerComponent
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   MaterialModule,
   BrowserAnimationsModule,
   FormsModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
