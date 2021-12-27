import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  exports: [
    CommonModule,
    TabMenuModule
  ]
})
export class PrimeNgModule { }
