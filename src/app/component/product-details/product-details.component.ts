import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { InputQuantityService } from 'src/app/service/input-quantity.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  activatedRoute: any;
  accountService: any;
  productId: any;
  product: Product;
  @Input() quantity: number;
  constructor(private route: ActivatedRoute, private productService: ProductService, private inputQuantityService: InputQuantityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getProductById(params['id']));
    this.inputQuantityService.quantity = this.quantity;

  }

  getById(id: any) {
    this.productService.getProductById(id).subscribe((data: Product) => this.product = data);
  }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe(
      (response: Product) => {
        this.product = response;
        console.log(this.product);
      }
    )
  }

}
