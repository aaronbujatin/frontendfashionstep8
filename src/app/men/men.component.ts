import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})

export class MenComponent implements OnInit {
  title = 'commerce';
  public products: Product[] = [];
  router: any;

  constructor(private productService: ProductService, router : Router) { }

  ngOnInit() {
    this.getMenProduct();
  }

  public getMenProduct(): void {
    this.productService.getMenProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // productCheckout(productId: any){
  //   this.router.navigate(['/checkout',productId])
  //   console.log(productId);
  // }
}

