import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SaveCustomerComponent } from './components/dashboard/inner-items/save-customer/save-customer.component';
import { UpdateCustomerComponent } from './components/dashboard/inner-items/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/dashboard/inner-items/delete-customer/delete-customer.component';
import { GetCustomerComponent } from './components/dashboard/inner-items/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/dashboard/inner-items/get-all-customers/get-all-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    SaveCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
