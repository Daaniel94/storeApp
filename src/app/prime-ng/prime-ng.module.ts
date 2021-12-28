import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importaciones de primeNG
import {TabMenuModule} from 'primeng/tabmenu';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';


@NgModule({
  exports: [
    BadgeModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CommonModule,
    TabMenuModule
  ]
})
export class PrimeNgModule { }
