import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos : Product[]= [];
  items: MenuItem[]=[];
  
  constructor( private productService : StoreService ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe( (res) => {
        console.log(res)
        this.productos = res;
      }, (err) => {
        console.log(err)
      } )
  }
}
