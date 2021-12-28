import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importaciones de primeNG
import {TabMenuModule} from 'primeng/tabmenu';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  exports: [
    BadgeModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CommonModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    PasswordModule,
    TabMenuModule
  ]
})
export class PrimeNgModule { }
