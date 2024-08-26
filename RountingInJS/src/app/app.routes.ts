import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path : "login",component:LoginComponent},
    {path : "signup",component:SingupComponent},
    {path :"",redirectTo:"/login",pathMatch:"full"},

    // Order Matters
    {path :"**",component:NotFoundComponent}
];
