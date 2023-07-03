import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToogleCasePipe } from './pages/pipes/toggle-case.pipe';
import { CanFly } from './pages/pipes/canFly.pipe';
import { SortBy } from './pages/pipes/sort_by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,
    ToogleCasePipe,
    CanFly,
    SortBy
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
