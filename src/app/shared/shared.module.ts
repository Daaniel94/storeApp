import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarModule } from 'primeng/menubar';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    MenuComponent,
    CarouselComponent
  ],
  exports: [
    MenuComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
