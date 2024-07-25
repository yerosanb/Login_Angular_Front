import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LoginGuard } from './Auth/guards/login/login.guard';
//import { LoginComponent, LoginComponent } from './Auth/login/login.component';
 

const routes: Routes = [
  
 // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
    // outlet: 'outer',
    // data: { animation: 'HomePage' },
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
