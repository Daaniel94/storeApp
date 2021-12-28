import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Token } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl : string = 'https://fakestoreapi.com';

  constructor( private http: HttpClient ) { }

  parametros = {
    'username':'',
    'password':''
  }

  loginUser(user:string, pass:string){
    this.parametros.username = user;
    this.parametros.password = pass;
    const url = `${ this.apiUrl }/auth/login`;
    return this.http.post<Token>( url, this.parametros)
  }

  getProducts(): Observable<Product[]>{
    const url= `${ this.apiUrl }/products`;
    return this.http.get<Product[]>( url );
  }

  getCarouselProducts(): Observable<Product[]>{
    const url = `${ this.apiUrl }/products?limit=9`;
    return this.http.get<Product[]>( url );
  }
}
