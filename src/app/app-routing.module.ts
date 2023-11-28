import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, 
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
{
  path: 'dashboard', component: EmployeedashboardComponent
},
{
  path: 'nav', component: NavComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
