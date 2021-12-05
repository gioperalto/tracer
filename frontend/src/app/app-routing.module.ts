import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create/create-account/create-account.component';
import { CreateExposureComponent } from './create/exposure/exposure.component';
import { CreateLocationComponent } from './create/location/location.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =  [
  { path: '',  component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'add/location', component: CreateLocationComponent },
  { path: 'report/exposure', component: CreateExposureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
