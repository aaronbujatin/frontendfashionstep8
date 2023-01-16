import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from './../service/product.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Customer } from '../model/customer';
import { InputQuantityService } from './../service/input-quantity.service';
import { ConfettiComponent } from './../confetti/confetti.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  

  inputIsEmpty = true;

  checkInput() {
    this.inputIsEmpty = this.customer.customerName.length === 0;
  }
  activatedRoute: any;
  accountService: any;

  product: Product;
  customer: Customer = new Customer();
  quantity: number;
  constructor(private route: ActivatedRoute, private productService: ProductService, private customerService: CustomerService, @Inject(InputQuantityService) private inputQuantityService: InputQuantityService, private myRoute: Router) {
    this.quantity = this.inputQuantityService.quantity;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getProductById(params['id']));
    // const myProduct = (this.product);
    // console.log(myProduct.id);


  }
  productId: any = this.route.snapshot.paramMap.get('id');


  // getById(id: any) {
  //   this.productService.getProductById(id).subscribe((data: Product) => this.product = data);

  // }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe(
      (response: Product) => {
        this.product = response;
        console.log(this.product);
        console.log("hello");
        console.log(this.productId);
      }
    )
  }


  onSubmit() {
    this.customer.productNumber = this.productId;
    this.customerService.saveCustomer(this.customer).subscribe(
      (response: Customer) => {
        this.customer = response;
        console.log("successfully added");
        // localStorage.setItem('customer',this.customer)
        this.myRoute.navigateByUrl('/order-success');

      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        console.log("not success");
        // console.log(this.product);
        console.log(this.customer.productNumber);

      },
    );
  }

  // customer: Customer = {
  //   customerName: '',
  //   email: '',
  //   phone: '',
  //   cardDetails: '',
  //   address: '',
  //   customerId: 0
  // };

  // onSubmit(): void {
  //   const data = {
  //     customerName: this.customer.customerName,
  //     email: this.customer.email,
  //     phone: this.customer.phone,
  //     cardDetails: this.customer.cardDetails,
  //     address: this.customer.address,
  //     customerId : this.customer.customerId
  //   };

  //   this.customerService.saveCustomer(data, this.product)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);

  //       },
  //       error: (e) => console.error(e)
  //     });
  // }


  // onSubmit(): void {
  //   this.customerService.saveCustomer(addForm.value, this.product).subscribe(
  //     (response: Customer) => {
  //      this.customer = response;

  //       console.log("this is from checkout if success");
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error.message);
  //       console.log("not success");
  //       console.log(this.product);
  //       console.log(this.customer);
  //     },
  //   );
  // }

  // saveCustomerAndItsProduct() {
  //   this.http.post<{ product: Product, customer: Customer }>('/api/v1/customer/checkout', { this.product, this.customer }).pipe(
  //     map((response) => {
  //       return response.product, response.customer;
  //     })
  //   ).subscribe((result) => {
  //     console.log(result.product);
  //     console.log(result.customer);
  //   });
  // }
  totalAmount : any;
  getValue(val:number){
    this.totalAmount = this.customer.quantity * this.product.productPrice;
  }

}
