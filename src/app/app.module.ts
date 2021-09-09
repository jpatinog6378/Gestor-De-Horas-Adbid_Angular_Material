import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material.module';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientComponent } from './pages/client/client.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    AdminComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
