import { Component, OnInit } from '@angular/core';
import { Token } from '../../interfaces/token.interface';
import { User } from '../../interfaces/user.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user! : User;
  usuario : string = '';
  password : string = '';
  userToken! : Token;

  constructor( private productService : StoreService ) { }

  ngOnInit(): void {
  }

  login(){
    this.productService.loginUser(this.usuario, this.password)
      .subscribe( (res)=> {
        this.userToken = res;
        //  Guardar token en localStorage para futuro uso
        localStorage.setItem('token' , this.userToken.token);
        console.log(this.userToken)
      }, (err) => {
        console.error(err)
      } )
  }

}
