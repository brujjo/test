import { Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { SigninComponent } from './componets/auth/signin/signin.component';
import { SignupComponent } from './componets/auth/signup/signup.component';
import { ProductComponent } from './componets/product/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'product', component: ProductComponent },

    
    ];
    

