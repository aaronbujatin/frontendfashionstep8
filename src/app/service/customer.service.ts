import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Customer } from '../model/customer';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public saveCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/v1/customer/checkout`,customer);
  }
}
