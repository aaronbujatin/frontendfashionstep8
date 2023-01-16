import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { map } from "rxjs/operators"; 

@Injectable({
    providedIn: 'root'
})
export class ProductService {
   

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<Product[]> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/product/all`);
    }

    public getMenProducts(): Observable<Product[]> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/product/category?category=men`);
    }

    public getWomenProducts(): Observable<Product[]> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/product/category?category=women`);
    }

    public getKidsProducts(): Observable<Product[]> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/product/category?category=kids`);
    }

    public addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiServerUrl}/api/v1/product/add`, product);
    }

    public updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiServerUrl}/api/v1/product/update`, product);
    }

    public getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiServerUrl}/api/v1/product/${id}`);
    }

    public deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/product/delete/${id}`);
    }


    

}
