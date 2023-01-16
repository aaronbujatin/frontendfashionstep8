import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

  public products: Product[] = [];
  router: any;


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getWomenProduct();
  }

  public getWomenProduct(): void {
    this.productService.getWomenProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  viewDetail(productId: any) {
    this.router.navigate(['order', productId]);
  }

  
}
