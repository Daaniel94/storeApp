import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  itemsWL: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', 
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Productos', 
        icon: 'pi pi-fw pi-calendar'
        },
      {
        label: 'Carrito', 
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: 'cart'
      },
      // {
      //   label: 'Perfil', 
      //   icon: 'pi pi-fw pi-user',
      //   routerLink: 'profile'
      // },
      {
        label: 'Iniciar Sesión', 
        icon: 'pi pi-fw pi-key',
        routerLink: ''
      }
  ];

  this.itemsWL = [
    {
      label: 'Home', 
      icon: 'pi pi-fw pi-home',
      routerLink: '/'
    },
    {
      label: 'Productos', 
      icon: 'pi pi-fw pi-calendar'
      },
    {
      label: 'Carrito', 
      icon: 'pi pi-fw pi-shopping-cart',
      routerLink: 'cart'
    },
    {
      label: 'Perfil', 
      icon: 'pi pi-fw pi-user',
      routerLink: 'profile'
    },
    {
      label: 'Cerrar Sesión', 
      icon: 'pi pi-fw pi-key',
      routerLink: ''
    }
  ];
  }

}
