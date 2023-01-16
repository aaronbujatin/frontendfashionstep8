import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { KidComponent } from './kid/kid.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

const routes: Routes = [
  { path: 'men', component: MenComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order-success', component: ConfettiComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }