import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent {

  public products: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getKidsProduct();
  }

  public getKidsProduct(): void {
    this.productService.getKidsProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
