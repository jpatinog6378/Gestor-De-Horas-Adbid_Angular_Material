import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientComponent } from './pages/client/client.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { IngresarTareaComponent } from './pages/employee/ingresar-tarea/ingresar-tarea.component';

const routes: Routes = [  
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee', 
  component: EmployeeComponent,
  children:[
    {path:"Ingresar_tarea", component:IngresarTareaComponent},
    { path: "", redirectTo: "/login", pathMatch: "full" }
  ] 
},
  { path: 'client', component: ClientComponent },
  {path : '', component : LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
