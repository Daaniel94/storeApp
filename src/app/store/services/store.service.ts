import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl : string = 'https://fakestoreapi.com';

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Product[]>{
    const url= `${ this.apiUrl }/products`;
    return this.http.get<Product[]>( url );
  }

  getCarouselProducts(): Observable<Product[]>{
    const url = `${ this.apiUrl }/products?limit=9`;
    return this.http.get<Product[]>( url );
  }
}
