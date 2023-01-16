import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { KidComponent } from './kid/kid.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    HomeComponent,
    WomenComponent,
    KidComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    NotfoundComponent,
    ConfettiComponent,
    OrdersuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
