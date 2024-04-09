import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './componets/auth/signin/signin.component';
import { SignupComponent } from './componets/auth/signup/signup.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductComponent } from './componets/product/product.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'signin', component: SigninComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'product', component: ProductComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
