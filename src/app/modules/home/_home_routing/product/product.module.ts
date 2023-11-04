import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../../product/product-list/product-list.component';
import { ProductDetailComponent } from '../../product/product-detail/product-detail.component';

const routes: Routes=[
  {path:'' ,component:ProductListComponent },
  {path:'chi-tiet' , component:ProductDetailComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
